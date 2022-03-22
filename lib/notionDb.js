import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const getMusicSheets = async () => {
    try {
        const databaseId = '97db7f2535a84f68a7175528d221ba90'
        const response = await notion.databases.query({
            database_id: databaseId
        })
        const results = response.results.map(result => {
            return {
                title: result.properties.Title.title[0].plain_text,
                pdf: result.properties.Pdf.files[0].file.url,
            }
        })
        return results
    } catch (error) {
        console.error(error)
    }
}

export default notion