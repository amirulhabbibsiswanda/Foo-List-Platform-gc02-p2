# Catatan Week 2

> Tuliskan apapun yang kalian pelajari pada phase 2 week-2 di file ini.
>
> "Pemahaman yang baik berasal dari keinginan untuk terus belajar, dan catatan adalah langkah pertama menuju pengetahuan yang dalam."

> npm create vite@latest
> pilih javascript
> react intro
> npm i dan npm run dev

javascript tidak bisa merender file js

- nanti react akan dieksekusi di div root
- id root itu bawaan dari react, namun sebenarnya bisa dirubah 
- 
> extension reactnya adalah jsx, yaitu javascript yang bisa dikombinasikan dengan html

file css internal juga harus diimpor:  import "./App.css"
> umumnya disimpan dulu di dalam function 
contoh: const app = () => {
    return, berhubung ini function jadi mungkin harus direturn
    tapi dibungkus div dulu, jadi agar mereturn satu div
    contoh: return (
        <div>
        </div>
    )

    html-nya
    nulis class dibiasakan jadi className = ""
    nulis style inline, yaitu dengan 2 kurung kurawal: style={{color: red}}
}

di html react juga bisa merender variabel (hanya primitive data) dengan menggunakan kurung kurawal, di awal harus dideclare dulu variabelnya. kalo di dalam html, menulis kondisional menggunakan ternary


recommen: transform.tools

> ada useState --> bawaan dari react, isi parameternya mungkin hanya bisa string atau number, jadi kalo mau tipe datanya string ditulis string kosong. kalo mau number ditulis nol.

biasanya penulisannya langsung didestrukturing,
contoh: const [email (getter), setEmail (setter)] = useState("asd@gmail.com")
maka artinya getter email akan mereturn "asd@gmail.com",
kalau untuk setternya begini,
setEmail("amirul@gmail.com") akan mengubah value menjadi "amirul@gmail.com"


nama function di .jsx menggunakan pascal case, termasuk penulisan filenya, misal Button.jsx, Logo.jsx

event listener biasanya: onClick, onSubmit, onChange
MISAL: onSubmit = {callback}