// call API
const allAiData = async () =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    const aiTools = data.data;
    aiToolsCall(aiTools)
    // console.log('hello', aiTools)
}
// json data display show
const aiToolsCall = (tools) =>{
    tools.tools.forEach(tool => {
        console.log(tool)
        // tool = tool.slice(0,6)
    });
    // console.log('hello', tools.tools)

}
allAiData()