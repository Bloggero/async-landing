const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCxIBZ-nQhgZES3UaTm8eDPA&filter=videos_latest&hl=en&gl=US';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae6570da40msh6b5cf6f10e02ddap1be6d9jsn0eb1343c0120',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};


(async () => {
    try{
        const videos = await fetchData(API);
        console.log('videos.contents', videos.contents);
        
        let view = `
            ${videos.contents.map(element => `
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${element.video.thumbnails[0].url}" alt="${element.video.title}" class="w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${element.video.title}
                    </h3>
                </div>
                </div>
            `).reverse().slice(0, 15).join('')};
        `;
        console.log('view', view);
    content.innerHTML = view;


    } catch(error){
        console.error(error);
    }
})();