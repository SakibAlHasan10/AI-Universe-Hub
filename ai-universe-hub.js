// call API
const allAiData = async (isShow) =>{
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    const aiTools = data.data.tools;
    // console.log('hello', aiTools)
    aiToolsCall(aiTools, isShow)
}
// json data display show
const seeMore = document.getElementById('see-more');
const aiToolsCall = (tools, isShow) =>{
    if(tools.length > 6){
        seeMore.classList.remove('hidden');
    }
    
    if(isShow){
        seeMore.classList.add('hidden')
        // console.log('kkkk')
    }else{
        if(!isShow){
            // console.log('yykk')
            tools = tools.slice(0,6)

        }
    }
    const toolCardContainer = document.getElementById('tool-card-container')
    if(isShow){
        toolCardContainer.innerHTML='';
        }
    tools.forEach(tool => {
        console.log(tool)
        const toolCard = document.createElement('div');
        toolCard.innerHTML= `
        <div class="card w-96 bg-base-100 border-solid border-2 border-slate-400 ">
                <figure class=" h-52"><img src="${tool?.image || 'Image not available'}" class="h-full w-full"/></figure>
                <div class="card-body">
                  <h2 class="card-title ">Features</h2>
                  <div class="text-slate-500">
                  <p>2. ${tool?.features[1] || 'not found'}</p>
                  <p>1. ${tool?.features[0] || 'not found'}</p>
                  <p>3. ${tool?.features[2] || 'not found'}</p>
                  </div>
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
const showAllCard = (isShow) =>{
    allAiData(isShow)
    console.log('hello', isShow)
}
allAiData()