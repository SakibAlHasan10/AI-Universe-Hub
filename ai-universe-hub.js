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
        const toolCardContainer = document.getElementById('tool-card-container')
        const toolCard = document.createElement('div');
        toolCard.innerHTML= `
        <div class="card w-96 bg-base-100 border-solid border-2 border-slate-400 ">
                <figure class=" h-52"><img src="${tool?.image || 'Image not available'}" class="h-full w-full"/></figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                  <p>2. ${tool?.features[1] || 'not found'}</p>
                  <p>1. ${tool?.features[0] || 'not found'}</p>
                  <p>3. ${tool?.features[2] || 'not found'}</p>
                  <hr class="my-5 border-slate-400"/>
                  <div class="flex justify-between">
                  <div >
                  <h2 class="card-title">${tool.name}</h2>
                  <p>${tool?.published_in || 'not found'}</p>
                  </div>
                  <div class="card-actions justify-end">
                    <button class="btn rounded-full bg-white"><i class="text-xl text-red-500 fa-solid fa-arrow-right"></i></button>
                  </div>
                  </div>
                  
                </div>
              </div>
        `
        toolCardContainer.appendChild(toolCard)
    });
    // console.log('hello', tools.tools)

}
allAiData()