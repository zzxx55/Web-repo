export function drawGalleryItem(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"


    const resourceWrapElement = document.createElement('div')
    resourceWrapElement.classList = "gallery-item__resource"

    if (item.type === 'image') {
        const imageElement = document.createElement('img')
        imageElement.classList = 'gallery-item__image'
        imageElement.src = item.resource
        resourceWrapElement.appendChild(imageElement)
    } else if (item.type === 'audio') {
        const audioElement = document.createElement('audio')
        audioElement.classList = 'gallery-item__audio'
        audioElement.src = item.resource
        audioElement.controls = true
        resourceWrapElement.appendChild(audioElement)
    } else if (item.type === 'video') {
        const videoElement = document.createElement('video')
        videoElement.classList = 'gallery-item__video'
        videoElement.src = item.resource
        videoElement.controls = true
        resourceWrapElement.appendChild(videoElement)
    }


    const imageElement = document.createElement('img')
    imageElement.classList = "gallery-item__image"
    imageElement.src = item.resource

    const titleElement = document.createElement('span')
    titleElement.classList = "gallery-item__title"
    titleElement.textContent = item.title


    itemElement.appendChild = (resourceWrapElement)
    itemElement.appendChild = (titleElement)
    return itemElement
}