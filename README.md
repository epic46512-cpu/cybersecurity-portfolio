# Abdullah Bashir — Cybersecurity Portfolio

**Live site:** `cybersecurity-portfolio.vercel.app`
**Owner:** Abdullah Bashir
**Email:** abdullah465120@gmail.com

---

## 🇬🇧 Simple English

This is a **personal portfolio website**. It shows who I am, what I am
learning, and the projects I have built while learning cybersecurity.

It is made with only **HTML, CSS and JavaScript**. There is nothing to
install — just open `index.html` in a browser.

### Files in this project

| File | Kya hai (what it does) |
|---|---|
| `index.html` | Page ka structure — headings, text, buttons, sections, **project cards** |
| `style.css` | Page ka look — colors, layout, spacing, mobile design |
| `script.js` | Page ki movement — typing effect, mobile menu, **animated background** |
| `vercel.json` | Vercel (hosting website) ka configuration |
| `serve.ps1` | Chhota helper — website ko ek click me chalane ke liye |

> **Note:** `projects.js` ek purana (old) file hai. Ab project cards
> `index.html` me likhi hui hain, is liye ye file use nahi ho rahi.
> Naya project add karne ke liye `index.html` me jaaein (neeche tareeqa hai).

### 🆕 Naya Project Add Karna (Aasan Tareeqa)

**Roman Urdu:** Naya project add karne ke liye `index.html` kholein aur
Projects section me ek nayi card copy-paste kar dein.

1. `index.html` kholein
2. `Ctrl + F` dabayen aur search karein **`project-card reveal`**
3. Ek poora card block copy karein:

```html
<!-- ---------- Naya project card ---------- -->
<article class="project-card reveal">
    <div class="project-top">
        <span class="project-icon" aria-hidden="true">&gt;_</span>
        <span class="tag tag-progress">In Progress</span>
    </div>

    <h3>Project ka naam yahan</h3>
    <p>
        Ye project karta kya hai — 2-3 lines me likhein.
    </p>

    <ul class="tag-list">
        <li>Pehla skill</li>
        <li>Doosra skill</li>
    </ul>

    <p class="project-legal">
        Sirf apne computer par chalta hai.
    </p>

    <div class="project-links">
        <a href="" class="btn btn-small btn-outline" aria-disabled="true">View code</a>
    </div>
</article>
```

4. Apni details bhar kar us block ko teeno cards ke neeche paste kar dein
5. Browser refresh kar dein — naya project khud ban jayega! ✅

**Rules yaad rakhein:**
- **"In Progress"** tag unfinished projects ke liye hai. Project ban jaye to
  sirf us card me "In Progress" ko "Completed" kar dein
- Link abhi nahi hai to `href=""` chhor dein — button khud disabled dikhega
- `<li>...</li>` wali line zaroori nahi, chhor sakte hain

**English:** Projects are plain HTML cards inside `index.html`. Copy one card,
paste it into the `projects-grid`, and change the text inside it.

### How the page is organised

```
Navbar        -> upar wali menu
Hero          -> naam aur introduction (sabse upar)
About         -> main kaun hoon
Skills        -> kya kya jaanta hoon
Projects      -> kya kya banaya
Journey       -> meri seekh ka safar (timeline)
Contact       -> email aur social links
Footer        -> sabse neeche wali patti
```

---

## 🇵🇰 Roman Urdu

Yeh meri **personal portfolio website** hai. Is par likha hai ke main
kaun hoon, kya seekh raha hoon, aur kya kya projects banaye hain.

Yeh **sirf HTML, CSS aur JavaScript** se bani hai. Kuch install karne
ki zaroorat nahi — bas `index.html` kisi bhi browser me khol dein.

### Files ka kaam

| File | Kaam |
|---|---|
| `index.html` | Page ki banawat — text, buttons, sections, project cards |
| `style.css` | Page ka rang-o-shakal — colors, design, mobile |
| `script.js` | Page ki movement — typing effect, menu, animation |
| `vercel.json` | Website hosting (Vercel) ki setting |
| `serve.ps1` | Website ko ek click me chalane ka helper |

---

## ▶️ Chalane ka tareeqa (How to run it)

### Sabse aasan tareeqa — Browser me kholein

1. Folder kholein: `C:\Users\Waseem Computer Nwl\Documents\Default Project`
2. `index.html` par **double-click** karein
3. Website browser me khul jayegi

> ⚠️ Chrome/Edge me `Ctrl + Shift + I` dabayen → `Console` tab — agar
> koi error dikhe to screenshot le kar dekhein.

### VS Code me chalana (recommended)

1. VS Code install karein (free hai)
2. `Live Server` extension install karein
3. `index.html` kholein → 右下 me **Go Live** dabayein

Website khud-ba-khud refresh hoti rahegi har change par.

---

## 🌐 Vercel par publish karna (Deploy)

**Roman Urdu:** Upload karne ke baad website poori duniya me live ho jayegi
aur aap ka link `cybersecurity-portfolio.vercel.app` ban jayega.

### Tareeqa 1 — GitHub ke zariye (recommended)

1. **GitHub.com** par ek naya repository banayein (`portfolio`)
2. Terminal / Git Bash me yeh commands chalayein:

```bash
cd "C:\Users\Waseem Computer Nwl\Documents\Default Project"
git init
git add .
git commit -m "first portfolio commit"
git branch -M main
git remote add origin https://github.com/AAPKA-USERNAME/portfolio.git
git push -u origin main
```

> ⚠️ `AAPKA-USERNAME` ko apne GitHub username se replace karein.

3. [vercel.com](https://vercel.com) par jayein → **Sign Up with GitHub**
4. **Add New → Project** → apna repository select karein
5. **Deploy** dabayein

Vercel khud detect kar leta hai ke yeh static website hai — kuch select
nahi karna, seedha deploy.

### Tareeqa 2 — Bina GitHub ke (seedha upload)

1. [vercel.com](https://vercel.com) par login karein
2. **Add New → Project** → **Other** → is folder ko upload karein
3. **Deploy**

---

## ✏️ Apni details badalna (Customise)

### Naam ya email badalna

`index.html` kholein aur `Ctrl + F` dabayein, phir yeh dhoondein:

| Kya badalna hai | Purana text | Naya text |
|---|---|---|
| Title | `Abdullah Bashir` | Apna naam |
| Contact email | `abdullah465120@gmail.com` | Apni email |

### Apne asli links daalna

`index.html` me `href="#"` wale links abhi khali hain. Apni profile
ka URL daal dein, masalan:

```html
<a href="https://github.com/abdullah/portfolio">
<a href="https://linkedin.com/in/abdullah-bashir">
```

### Colors badalna

Sab colors `style.css` ke shuru me hain (`--green`, `--blue`, etc.).
Sirf `--green` ki value badal dein, poori website ka rang badal jayega.

---

## 📁 Folder structure

```
Default Project/
├── index.html      <- main page (project cards bhi yahan hain)
├── style.css       <- design/colors/background
├── script.js       <- animations + matrix background
├── projects.js     <- purana/old file (ab use nahi ho raha)
├── serve.ps1       <- local server helper
├── vercel.json     <- hosting config
├── README.md       <- yeh file (instructions)
├── _old-website\   <- purani website ka backup
└── _backup-2026-10-10\  <- safety backup
```

---

## ⚠️ Legal Notice (Important)

Yeh portfolio sirf **apne lab** me chalne wale projects dikhata hai.
Main kisi aur ke network ko scan ya test nahi karta.

**Roman Urdu:** Yeh portfolio sirf apne lab ke projects dikhata hai.
Main kisi aur ka network scan ya test nahi karta. Yeh zaroori hai —
 bina ijazat ke kisi aur ke system ko test karna **ghair-qanooni** ho sakta hai.

---

Made with ❤️ using HTML, CSS & JavaScript