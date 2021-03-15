import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function Header(props) {
  const router = useRouter()
  const searchProduct = () => {
    const toSearch = document.querySelector("#inpSearch").value
    router.push("/items?search=" + toSearch)
  }

  function runScript(e) {
    if (e.key == "Enter") {
      searchProduct()
    }
  }

  useEffect(() => {
    const searchParam = router.query?.search
    if(searchParam) document.querySelector("#inpSearch").value = searchParam
  }, [])

  return <div id="Header">
    <div className="content">
      <Link href="/">
        <img src="/assets/Logo_ML.png" alt="" />
      </Link>
      <div className="search-content">
        <input type="text" id="inpSearch" onKeyPress={(event) => runScript(event)} />
        <button onClick={searchProduct}>
          <img className="icon" src="/assets/ic_Search.png" alt="" />
        </button>

      </div>
    </div>
  </div>
}