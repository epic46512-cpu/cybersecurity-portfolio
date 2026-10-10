# Tiny static file server used only to preview the site locally.
# Run with:  powershell -ExecutionPolicy Bypass -File serve.ps1
$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8765/")
$listener.Start()
Write-Output "Serving $root at http://127.0.0.1:8765/ (Ctrl+C to stop)"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $path = $context.Request.Url.AbsolutePath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }

        $full = Join-Path $root $path
        # Block any path that tries to escape the project folder.
        if (-not $full.StartsWith($root)) {
            $context.Response.StatusCode = 403
            $context.Response.Close()
            continue
        }

        if (Test-Path -LiteralPath $full -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($full).ToLower()
            $types = @{ '.html'='text/html'; '.css'='text/css'; '.js'='text/javascript';
                        '.json'='application/json'; '.svg'='image/svg+xml';
                        '.png'='image/png'; '.jpg'='image/jpeg'; '.ico'='image/x-icon' }
            if ($types.ContainsKey($ext)) { $context.Response.ContentType = $types[$ext] }
            $bytes = [System.IO.File]::ReadAllBytes($full)
            $context.Response.ContentLength64 = $bytes.Length
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $context.Response.StatusCode = 404
        }
        $context.Response.Close()
    } catch {
        Write-Output "error: $($_.Exception.Message)"
    }
}