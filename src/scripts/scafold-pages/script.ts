import { scaffoldPage } from "./scafold-page"


function main() {
  const components_path = process.argv[2]

  if (!components_path) {
    throw new Error("No page path provided. try /dashboard/new")
  }
  const pagename = components_path.split("/").pop()
  if (!pagename) {
    throw new Error("No page name provided. try /dashboard/new")
  }
  return scaffoldPage(pagename,components_path)

}

main()
.catch((err) => {
  console.log(" ===  something went wrong scaffolding ===", err.message)
})

