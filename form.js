let submitBtn = document.querySelector('.submit')
var dropdown = document.querySelector('.dropdown');
let numMats = document.querySelector('.numero_materiales')
let materialUno = document.querySelector('.material-1')
let materialDos = document.querySelector('.material-2')
let materialTres = document.querySelector('.material-3')
let familyMaterialTitle = []
let familyMaterialSubtitle = []
let familyImages = []
let materials = ``
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
  if (event.target.innerHTML <= 3) {
    numMats.innerHTML = event.target.innerHTML
  }
  if (numMats.innerHTML == 1) {
    materialUno.style.display = "block"
    materialDos.style.display = "none"
    materialTres.style.display = "none"
  }

  if (numMats.innerHTML == 2) {
    materialUno.style.display = "block"
    materialDos.style.display = "block"
    materialTres.style.display = "none"
  }

  if (numMats.innerHTML == 3) {
    materialUno.style.display = "block"
    materialDos.style.display = "block"
    materialTres.style.display = "block"
  }
});

submitBtn.addEventListener('click', () => {
    let materialTitle = document.querySelector('.materials-title').value
    let materialDescription = document.querySelector('.materials-description').value
    let materialImg = document.querySelector('.materials-image').value

    familyMaterialTitle[0] = document.querySelector('.family-title').value
    familyMaterialTitle[1] = document.querySelector('.family-title2').value
    familyMaterialTitle[2] = document.querySelector('.family-title3').value
    
    familyMaterialSubtitle[0] = document.querySelector('.family-subtitle').value
    familyMaterialSubtitle[1] = document.querySelector('.family-subtitle2').value
    familyMaterialSubtitle[2] = document.querySelector('.family-subtitle3').value
    
    let familyMaterialDescription = []
    familyMaterialDescription[0] = document.querySelector('.family-description1').value
    familyMaterialDescription[1] = document.querySelector('.family-description2').value
    familyMaterialDescription[2] = document.querySelector('.family-description3').value
    
    let familyFeature1 = []
    familyFeature1[0] = document.querySelector('.family-feature11').value
    familyFeature1[1] = document.querySelector('.family-feature12').value
    familyFeature1[2] = document.querySelector('.family-feature13').value

    let familyFeature2 = []
    familyFeature2[0] = document.querySelector('.family-feature21').value
    familyFeature2[1] = document.querySelector('.family-feature22').value
    familyFeature2[2] = document.querySelector('.family-feature23').value

    let familyFeature3 = []
    familyFeature3[0] = document.querySelector('.family-feature31').value
    familyFeature3[1] = document.querySelector('.family-feature32').value
    familyFeature3[2] = document.querySelector('.family-feature33').value

    let familyPropertyBar1 = []
    let familyPropertyBar2 = []
    let familyPropertyBar3 = []
    familyPropertyBar1[0] = document.querySelector('.family-propertyBar11').value
    familyPropertyBar1[1] = document.querySelector('.family-propertyBar12').value
    familyPropertyBar1[2] = document.querySelector('.family-propertyBar13').value
    familyPropertyBar2[0] = document.querySelector('.family-propertyBar21').value
    familyPropertyBar2[1] = document.querySelector('.family-propertyBar22').value
    familyPropertyBar2[2] = document.querySelector('.family-propertyBar23').value
    familyPropertyBar3[0] = document.querySelector('.family-propertyBar31').value
    familyPropertyBar3[1] = document.querySelector('.family-propertyBar32').value
    familyPropertyBar3[2] = document.querySelector('.family-propertyBar33').value

    var propertyBarMinIndex = []
    var propertyBarMaxIndex = []
    var propertyBarValueIndex = []
    var propertyBarMinIndex2 = []
    var propertyBarMaxIndex2 = []
    var propertyBarValueIndex2 = []
    var propertyBarMinIndex3 = []
    var propertyBarMaxIndex3 = []
    var propertyBarValueIndex3 = []

    propertyBarMinIndex[0] = document.querySelector('.family-min-index-propertyBar11').value
    propertyBarMinIndex[1] = document.querySelector('.family-min-index-propertyBar12').value
    propertyBarMinIndex[2] = document.querySelector('.family-min-index-propertyBar13').value

    propertyBarMaxIndex[0] = document.querySelector('.family-max-index-propertyBar11').value
    propertyBarMaxIndex[1] = document.querySelector('.family-max-index-propertyBar12').value
    propertyBarMaxIndex[2] = document.querySelector('.family-max-index-propertyBar13').value

    propertyBarValueIndex[0] = document.querySelector('.family-value-index-propertyBar11').value
    propertyBarValueIndex[1] = document.querySelector('.family-value-index-propertyBar12').value
    propertyBarValueIndex[2] = document.querySelector('.family-value-index-propertyBar13').value

    propertyBarMinIndex2[0] = document.querySelector('.family-min-index-propertyBar21').value
    propertyBarMinIndex2[1] = document.querySelector('.family-min-index-propertyBar22').value
    propertyBarMinIndex2[2] = document.querySelector('.family-min-index-propertyBar23').value

    propertyBarMaxIndex2[0] = document.querySelector('.family-max-index-propertyBar21').value
    propertyBarMaxIndex2[1] = document.querySelector('.family-max-index-propertyBar22').value
    propertyBarMaxIndex2[2] = document.querySelector('.family-max-index-propertyBar23').value

    propertyBarValueIndex2[0] = document.querySelector('.family-value-index-propertyBar21').value
    propertyBarValueIndex2[1] = document.querySelector('.family-value-index-propertyBar22').value
    propertyBarValueIndex2[2] = document.querySelector('.family-value-index-propertyBar23').value

    propertyBarMinIndex3[0] = document.querySelector('.family-min-index-propertyBar31').value
    propertyBarMinIndex3[1] = document.querySelector('.family-min-index-propertyBar32').value
    propertyBarMinIndex3[2] = document.querySelector('.family-min-index-propertyBar33').value

    propertyBarMaxIndex3[0] = document.querySelector('.family-max-index-propertyBar31').value
    propertyBarMaxIndex3[1] = document.querySelector('.family-max-index-propertyBar32').value
    propertyBarMaxIndex3[2] = document.querySelector('.family-max-index-propertyBar33').value

    propertyBarValueIndex3[0] = document.querySelector('.family-value-index-propertyBar31').value
    propertyBarValueIndex3[1] = document.querySelector('.family-value-index-propertyBar32').value
    propertyBarValueIndex3[2] = document.querySelector('.family-value-index-propertyBar33').value

    familyImages[0] = document.querySelector('family-image')
    familyImages[1] = document.querySelector('family-image1')
    familyImages[2] = document.querySelector('family-image2')


    var imageGallery1 = []
    imageGallery1[0] = document.querySelector('.family-image-gallery11').value
    imageGallery1[1] = document.querySelector('.family-image-gallery12').value
    imageGallery1[2] = document.querySelector('.family-image-gallery13').value
    imageGallery1[3] = document.querySelector('.family-image-gallery14').value
    var imageGallery2 = []
    imageGallery2[0] = document.querySelector('.family-image-gallery21').value
    imageGallery2[1] = document.querySelector('.family-image-gallery22').value
    imageGallery2[2] = document.querySelector('.family-image-gallery23').value
    imageGallery2[3] = document.querySelector('.family-image-gallery24').value
    var imageGallery3 = []
    imageGallery3[0] = document.querySelector('.family-image-gallery31').value
    imageGallery3[1] = document.querySelector('.family-image-gallery32')
    imageGallery3[2] = document.querySelector('.family-image-gallery33')
    imageGallery3[3] = document.querySelector('.family-image-gallery34')


    let application = document.querySelector('.application').value
    let advantages = document.querySelector('.advantages').value
    let disadvantages = document.querySelector('.disadvantages').value
    let price = document.querySelector('.price').value
    let waitTime = document.querySelector('.wait-time').value
    let tolerances = document.querySelector('.tolerances').value
    let maxPartSize1 = document.querySelector('.max-part-size').value
    let nozzleTemp = document.querySelector('.nozzle-temp').value
    let printingSpeed = document.querySelector('.printing-speed').value
    let bedTemp = document.querySelector('.bed-temp').value
    let bedSurface = document.querySelector('.bed-surface').value
    let coolingFan = document.querySelector('.cooling-fan').value
    let glassTemp = document.querySelector('.glass-temp').value
    let vicatTemp = document.querySelector('.vicat-temp').value
    let meltingTemp = document.querySelector('.melting-temp').value
    let maxPartSize2 = document.querySelector('.max-part-size2').value
    let applications = document.querySelector('.applications').value
    let thumbnailTitle = []
    thumbnailTitle[0] = document.querySelector('.thumbnail-title').value
    thumbnailTitle[1] = document.querySelector('.thumbnail-title2').value
    thumbnailTitle[2] = document.querySelector('.thumbnail-title3').value

    
    let thumbnailDescription = []
    thumbnailDescription[0] = document.querySelector('.thumbnail-desc').value
    thumbnailDescription[1] = document.querySelector('.thumbnail-desc2').value
    thumbnailDescription[2] = document.querySelector('.thumbnail-desc3').value

    
    let featuredText = document.querySelector('.featured-thumbnail-text').value
    let normalText = document.querySelector('.featured-thumbnail-normal-text').value
    
    let featuredThumbnailImg = document.querySelector('.featured-thumbnail-image').value
    let thumbnailImg = []
    thumbnailImg[0] = document.querySelector('.thumbnail-image1').value
    thumbnailImg[1] = document.querySelector('.thumbnail-image2').value
    thumbnailImg[2] = document.querySelector('.thumbnail-image3').value

    let  matDesc1 = `<div class="column matDesc1" style="display:block">
<div class="material-desc">
  <h2 class="title">${familyMaterialTitle[0]}</h2>
  <h4>${familyMaterialSubtitle[0]}</h4>
  <p>${familyMaterialDescription[0]}</p>
  <div class="columns">
    <div class="column">
      <ul>
        <li class="list-style: none">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature1[0]}
        </li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature1[1]}
        </ul>
      </li>
    </div>
    <div class="column">
      <ul>
        <li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature1[2]}
        </li>
      </ul>
    </div>
  </div>
  <div class="description-bars">
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar1[0]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex[0]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[0]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[0]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex[0]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar1[1]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex[1]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[1]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[1]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex[1]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar1[2]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex[2]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value=${propertyBarValueIndex[2]} max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[2]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex[2]}
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fourth"><img src="${imageGallery1[0]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery1[1]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery1[2]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery1[3]}" alt="">
      </div>
    </div>
  </div>
</div>
</div>`
let matDesc2 = `<div class="column matDesc2" style="display:none">
<div class="material-desc">
  <h2 class="title">${familyMaterialTitle[1]}</h2>
  <h4>${familyMaterialSubtitle[1]}</h4>
  <p>${familyMaterialDescription[1]}</p>
  <div class="columns">
    <div class="column">
      <ul>
        <li class="list-style: none">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature2[0]}
        </li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature2[1]}
        </ul>
      </li>
    </div>
    <div class="column">
      <ul>
        <li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature2[2]}
        </li>
      </ul>
    </div>
  </div>
  <div class="description-bars">
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar2[0]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex2[0]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[0]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[0]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex2[0]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar2[1]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex2[1]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[1]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[1]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex2[1]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar2[2]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex2[2]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value=${propertyBarValueIndex[2]} max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[2]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex2[2]}
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fourth"><img src="${imageGallery2[0]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[1]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[2]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[3]}" alt="">
      </div>
    </div>
  </div>
</div>
</div>`
let matDesc3 = `<div class="column matDesc3" style="display:none">
<div class="material-desc">
  <h2 class="title">${familyMaterialTitle[2]}</h2>
  <h4>${familyMaterialSubtitle[2]}</h4>
  <p>${familyMaterialDescription[2]}</p>
  <div class="columns">
    <div class="column">
      <ul>
        <li class="list-style: none">
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature3[0]}
        </li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature3[1]}
        </ul>
      </li>
    </div>
    <div class="column">
      <ul>
        <li>
          <span class="icon has-text-success">
            <i class="fas fa-check-circle"></i>
          </span>
          ${familyFeature3[2]}
        </li>
      </ul>
    </div>
  </div>
  <div class="description-bars">
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar3[0]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex3[0]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[0]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[0]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex3[0]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar3[1]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex3[1]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value="${propertyBarValueIndex[1]}" max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[1]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex3[1]}
      </div>

    </div>
    <div class="columns">
      <div class="column is-2">
        <strong>${familyPropertyBar3[2]}</strong>
      </div>
      <div class="column is-1">
        <span class="icon has-text-info">
          <i class="fas fa-info-circle"></i>
        </span>
      </div>
      <div class="column is-1">
        ${propertyBarMinIndex3[2]}
      </div>
      <div class="column is-6">
        <progress class="progress is-link" value=${propertyBarValueIndex[2]} max="100"
          style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[2]}</progress>
      </div>
      <div class="column is-2">
        ${propertyBarMaxIndex3[2]}
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fourth"><img src="${imageGallery2[0]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[1]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[2]}" alt="">
      </div>
      <div class="column is-one-fourth"><img src="${imageGallery2[3]}" alt="">
      </div>
    </div>
  </div>
</div>
</div>`

    
    if(numMats.innerHTML == 1 || numMats.innerHTML === 'Seleccionar cantidad de materiales') {
      materials = `
  <div class="materials">
    <div class="button material-button materialBtn1 is-white">
      <div class="columns">
        <div class="column">
          <img src="${familyImages[0]}" alt="img" class="image materialsImg">
        </div>
        <div class="column">
          <h5 class="is-title">${familyMaterialTitle[0]}</h6>
            <h6 class="is-subtitle">${familyMaterialSubtitle[0]}</h6>
        </div>
      </div>
    </div>
  </div>
  `

    }

    if(numMats.innerHTML == 2 || numMats.innerHTML === 'Seleccionar cantidad de materiales') {
      materials = `
    <div class="materials">
    <div class="button material-button materialBtn1  is-white">
      <div class="columns">
        <div class="column">
          <img src="${familyImages[0]}" alt="img" class="image materialsImg">
        </div>
        <div class="column">
          <h5 class="is-title">${familyMaterialTitle[0]}</h6>
            <h6 class="is-subtitle">${familyMaterialSubtitle[0]}</h6>
        </div>
      </div>
    </div>
    <div class="button material-button materialBtn2 is-white">
      <div class="columns">
        <div class="column">
          <img src="${familyImages[1]}" alt="img" class="image materialsImg">
        </div>
        <div class="column">
          <h5 class="is-title">${familyMaterialTitle[1]}</h6>
            <h6 class="is-subtitle">${familyMaterialSubtitle[1]}</h6>
        </div>
      </div>
    </div>
  </div>`
    }

    if(numMats.innerHTML == 3 || numMats.innerHTML === 'Seleccionar cantidad de materiales') {
      materials = `
      <div class="materials">
              <div class="button material-button materialBtn1 is-white">
                <div class="columns">
                  <div class="column">
                    <img src="${familyImages[0]}" alt="img" class="image materialsImg">
                  </div>
                  <div class="column">
                    <h5 class="is-title">${familyMaterialTitle[0]}</h6>
                      <h6 class="is-subtitle">${familyMaterialSubtitle[0]}</h6>
                  </div>
                </div>
              </div>
              <div class="button material-button materialBtn2 is-white">
                <div class="columns">
                  <div class="column">
                    <img src="${familyImages[1]}" alt="img" class="image materialsImg">
                  </div>
                  <div class="column">
                    <h5 class="is-title">${familyMaterialTitle[1]}</h6>
                      <h6 class="is-subtitle">${familyMaterialSubtitle[1]}</h6>
                  </div>
                </div>
              </div>
              <div class="button material-button materialBtn3 is-white">
                <div class="columns">
                  <div class="column">
                    <img src="${familyImages[2]}" alt="img" class="image materialsImg">
                  </div>
                  <div class="column">
                    <h5 class="is-title">${familyMaterialTitle[2]}</h6>
                      <h6 class="is-subtitle">${familyMaterialSubtitle[2]}</h6>
                  </div>
                </div>
              </div>
            </div>`

      matDesc3 = `<div class="column matDesc3" style="display:none">
      <div class="material-desc">
        <h2 class="title">${familyMaterialTitle[2]}</h2>
        <h4>${familyMaterialSubtitle[2]}</h4>
        <p>${familyMaterialDescription[2]}</p>
        <div class="columns">
          <div class="column">
            <ul>
              <li class="list-style: none">
                <span class="icon has-text-success">
                  <i class="fas fa-check-circle"></i>
                </span>
                ${familyFeature3[0]}
              </li>
                <span class="icon has-text-success">
                  <i class="fas fa-check-circle"></i>
                </span>
                ${familyFeature3[1]}
              </ul>
            </li>
          </div>
          <div class="column">
            <ul>
              <li>
                <span class="icon has-text-success">
                  <i class="fas fa-check-circle"></i>
                </span>
                ${familyFeature3[2]}
              </li>
            </ul>
          </div>
        </div>
        <div class="description-bars">
          <div class="columns">
            <div class="column is-2">
              <strong>${familyPropertyBar3[0]}</strong>
            </div>
            <div class="column is-1">
              <span class="icon has-text-info">
                <i class="fas fa-info-circle"></i>
              </span>
            </div>
            <div class="column is-1">
              ${propertyBarMinIndex3[0]}
            </div>
            <div class="column is-6">
              <progress class="progress is-link" value="${propertyBarValueIndex[0]}" max="100"
                style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[0]}</progress>
            </div>
            <div class="column is-2">
              ${propertyBarMaxIndex3[0]}
            </div>

          </div>
          <div class="columns">
            <div class="column is-2">
              <strong>${familyPropertyBar3[1]}</strong>
            </div>
            <div class="column is-1">
              <span class="icon has-text-info">
                <i class="fas fa-info-circle"></i>
              </span>
            </div>
            <div class="column is-1">
              ${propertyBarMinIndex3[1]}
            </div>
            <div class="column is-6">
              <progress class="progress is-link" value="${propertyBarValueIndex[1]}" max="100"
                style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[1]}</progress>
            </div>
            <div class="column is-2">
              ${propertyBarMaxIndex3[1]}
            </div>

          </div>
          <div class="columns">
            <div class="column is-2">
              <strong>${familyPropertyBar3[2]}</strong>
            </div>
            <div class="column is-1">
              <span class="icon has-text-info">
                <i class="fas fa-info-circle"></i>
              </span>
            </div>
            <div class="column is-1">
              ${propertyBarMinIndex3[2]}
            </div>
            <div class="column is-6">
              <progress class="progress is-link" value=${propertyBarValueIndex[2]} max="100"
                style="padding-top:3px;margin-top: 3px;">${propertyBarValueIndex[2]}</progress>
            </div>
            <div class="column is-2">
              ${propertyBarMaxIndex3[2]}
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-fourth"><img src="${imageGallery2[0]}" alt="">
            </div>
            <div class="column is-one-fourth"><img src="${imageGallery2[1]}" alt="">
            </div>
            <div class="column is-one-fourth"><img src="${imageGallery2[2]}" alt="">
            </div>
            <div class="column is-one-fourth"><img src="${imageGallery2[3]}" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>`
    }

    let templateBody = `
  <div data-collapse="medium" data-animation="over-right" data-duration="800" data-easing="ease-out-expo"
    data-easing2="ease-out-expo" data-w-id="3ce4a318-7b0d-5409-5d9c-d7c0095f78ae" role="banner"
    class="header transparent w-nav">
    <div class="container-header">
      <div class="shadow"></div>
      <div data-w-id="3ce4a318-7b0d-5409-5d9c-d7c0095f78b1" class="header-split-left">
        <a href="index.html" class="brand w-nav-brand"></a><img src="images/Logo-3D-FACTORY-MX.png" loading="lazy"
          width="94" sizes="94px" srcset="images/Logo-3D-FACTORY-MX-p-500.png 500w, images/Logo-3D-FACTORY-MX.png 792w"
          alt="" class="image">
        <div class="divider header-left"></div>
        <nav role="navigation" class="nav-menu-header w-nav-menu">
          <a href="index.html" class="nav-link-template main-header w-nav-link">Inicio</a>
          <div data-hover="" data-delay="0" data-w-id="b3f557a2-7b67-661f-03df-108f449efcec"
            class="dropdown-header w-dropdown">
            <div class="nav-link main-header w-dropdown-toggle">
              <div class="black-text">Proceso de Manufactura <span class="icon-dropdown"> </span></div>
            </div>
            <nav class="dropdown-list w-dropdown-list">
              <div class="w-layout-grid dropdown-grid">
                <div id="w-node-b3f557a2-7b67-661f-03df-108f449efcf4-095f78ae" class="drop-div first">
                  <div class="w-layout-grid drop-grid">
                    <div class="dropdown-menu-wrapper">
                      <a href="index.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Manufactura aditiva</div>
                        </div>
                      </a>
                      <a href="about-us.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>FDM</div>
                        </div>
                      </a>
                      <a href="agenda.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>SLA</div>
                        </div>
                      </a>
                      <a href="speakers.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>MJF</div>
                        </div>
                      </a>
                      <a href="https://eventlytemplate.webflow.io/speaker/john-carter" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>CNC</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Corte láser</div>
                        </div>
                      </a>
                    </div>
                    <div class="dropdown-menu-wrapper">
                      <a href="index.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Manufactura tradicional</div>
                        </div>
                      </a>
                      <a href="blog.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>CNC</div>
                        </div>
                      </a>
                      <a href="https://eventlytemplate.webflow.io/post/5-great-marketing-trends-to-follow-in-2020"
                        class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Corte láser</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div data-hover="" data-delay="0" data-w-id="a8b34c6a-6026-9724-0af9-2614ada4d84e"
            class="dropdown-header w-dropdown">
            <div class="nav-link main-header w-dropdown-toggle">
              <div class="black-text">Materiales<span class="icon-dropdown"> </span></div>
            </div>
            <nav class="dropdown-list w-dropdown-list">
              <div class="w-layout-grid dropdown-grid">
                <div id="w-node-a8b34c6a-6026-9724-0af9-2614ada4d856-095f78ae" class="drop-div first">
                  <div class="w-layout-grid drop-grid">
                    <div class="dropdown-menu-wrapper">
                      <a href="index.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Básico</div>
                        </div>
                      </a>
                      <a href="about-us.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Ecofriendly-PLA</div>
                        </div>
                      </a>
                      <a href="agenda.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>ABS</div>
                        </div>
                      </a>
                      <a href="speakers.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PETG</div>
                        </div>
                      </a>
                      <a href="https://eventlytemplate.webflow.io/speaker/john-carter" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PLA</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>MMA</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Polysmooth (PVB)</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PU</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>TPU shore A90</div>
                        </div>
                      </a>
                      <a href="conference.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>TPU shore A95</div>
                        </div>
                      </a>
                    </div>
                    <div class="dropdown-menu-wrapper">
                      <a href="tickets.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div><strong>Profesionales</strong></div>
                        </div>
                      </a>
                      <a href="https://eventlytemplate.webflow.io/product/deluxe-ticket"
                        class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>ASA</div>
                        </div>
                      </a>
                      <a href="blog.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>HIPS</div>
                        </div>
                      </a>
                      <a href="https://eventlytemplate.webflow.io/post/5-great-marketing-trends-to-follow-in-2020"
                        class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Nylon 12 (PA12)</div>
                        </div>
                      </a>
                      <a href="contact.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Nylon 6 (PA6)</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PC</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PC-ABS</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PC-PBT</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Polycast (PVB)</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>PP</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>ULTRAT (PC-ABS)</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Casteable</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>Dental Model</div>
                        </div>
                      </a>
                      <a href="start-here.html" class="drop-link w-inline-block">
                        <div class="drop-text">
                          <div>ESD-Safe</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div id="w-node-a8b34c6a-6026-9724-0af9-2614ada4d895-095f78ae" class="drop-div last">
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div><strong>Industriales</strong></div>
                    </div>
                  </a>
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div>PA6-CF</div>
                    </div>
                  </a>
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div>PA12-CF</div>
                    </div>
                  </a>
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div>PA6-GF</div>
                    </div>
                  </a>
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div>PEEK</div>
                    </div>
                  </a>
                  <a href="tickets.html" class="drop-link w-inline-block">
                    <div class="drop-text">
                      <div>PEI</div>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <a href="speakers.html" class="nav-link-template main-header w-nav-link">Nuestra recomendación</a>
          <a href="blog.html" class="nav-link-template main-header w-nav-link">Soluciones a la medida</a>
        </nav>
      </div>
      <div data-w-id="3ce4a318-7b0d-5409-5d9c-d7c0095f78ea" class="header-split-right">
        <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query=""
          data-wf-page-link-href-prefix="" class="w-commerce-commercecartwrapper cart">
          <a href="#" data-node-type="commerce-cart-open-link"
            class="w-commerce-commercecartopenlink cart-button w-inline-block">
            <div class="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
          </a>
          <div data-node-type="commerce-cart-container-wrapper" style="display:none"
            class="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper">
            <div data-node-type="commerce-cart-container" class="w-commerce-commercecartcontainer cart-container">
              <div class="w-commerce-commercecartheader cart-header">
                <h4 class="w-commerce-commercecartheading">Your Cart</h4>
                <a href="#" data-node-type="commerce-cart-close-link"
                  class="w-commerce-commercecartcloselink w-inline-block"><svg width="16px" height="16px"
                    viewbox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g fill-rule="nonzero" fill="#333333">
                        <polygon
                          points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
                        </polygon>
                      </g>
                    </g>
                  </svg></a>
              </div>
              <div class="w-commerce-commercecartformwrapper">
                <form data-node-type="commerce-cart-form" style="display:none" class="w-commerce-commercecartform">
                  <script type="text/x-wf-template" id="wf-template-3ce4a318-7b0d-5409-5d9c-d7c0095f78f8"></script>
                  <div class="w-commerce-commercecartlist cart-list"
                    data-wf-collection="database.commerceOrder.userItems"
                    data-wf-template-id="wf-template-3ce4a318-7b0d-5409-5d9c-d7c0095f78f8"></div>
                  <div class="w-commerce-commercecartfooter cart-footer">
                    <div class="w-commerce-commercecartlineitem">
                      <div>Subtotal:</div>
                      <div class="w-commerce-commercecartordervalue subtotal"></div>
                    </div>
                    <div>
                      <div data-node-type="commerce-cart-quick-checkout-actions">
                        <a data-node-type="commerce-cart-apple-pay-button"
                          style="background-image:-webkit-named-image(apple-pay-logo-white);background-size:100% 50%;background-position:50% 50%;background-repeat:no-repeat"
                          class="w-commerce-commercecartapplepaybutton apple-pay">
                          <div></div>
                        </a>
                        <a data-node-type="commerce-cart-quick-checkout-button" style="display:none"
                          class="w-commerce-commercecartquickcheckoutbutton"><svg
                            class="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewbox="0 0 16 16">
                            <defs>
                              <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649"></polygon>
                              <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443"></polygon>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                              <path fill="#4285F4"
                                d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469">
                              </path>
                              <path fill="#34A853"
                                d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16">
                              </path>
                              <g transform="translate(0 4)">
                                <mask id="google-mark-b" fill="#fff">
                                  <use xlink:href="#google-mark-a"></use>
                                </mask>
                                <path fill="#FBBC04"
                                  d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                  mask="url(#google-mark-b)"></path>
                              </g>
                              <mask id="google-mark-d" fill="#fff">
                                <use xlink:href="#google-mark-c"></use>
                              </mask>
                              <path fill="#EA4335"
                                d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                mask="url(#google-mark-d)"></path>
                            </g>
                          </svg><svg class="w-commerce-commercequickcheckoutmicrosofticon"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16">
                            <g fill="none" fill-rule="evenodd">
                              <polygon fill="#F05022" points="7 7 1 7 1 1 7 1"></polygon>
                              <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1"></polygon>
                              <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9"></polygon>
                              <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9"></polygon>
                            </g>
                          </svg>
                          <div>Pay with browser.</div>
                        </a>
                      </div>
                      <a href="checkout.html" value="Continue to Checkout" data-node-type="cart-checkout-button"
                        class="w-commerce-commercecartcheckoutbutton button-primary cart-checkout"
                        data-loading-text="Hang Tight...">Continue to Checkout</a>
                    </div>
                  </div>
                </form>
                <div class="w-commerce-commercecartemptystate empty-state cart">
                  <div>No items found.</div>
                </div>
                <div style="display:none" data-node-type="commerce-cart-error"
                  class="w-commerce-commercecarterrorstate error-message cart">
                  <div class="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity."
                    data-w-cart-checkout-error="Checkout is disabled on this site."
                    data-w-cart-general-error="Something went wrong when adding this item to the cart."
                    data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue.">
                    Product is not available in this quantity.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="tickets.html" class="button-primary small-header w-button">Cotiza en línea</a>
        <div class="menu-button-mobile w-nav-button">
          <div class="menu-button-icon">
            <div class="menu-line-top"></div>
            <div class="menu-line-middle"></div>
            <div class="menu-line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section backgroundLight is-medium materialDescription">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <img src="${materialImg}" alt="" class="src">
        </div>
        <div class="column">
          <h1 class="title">${materialTitle}</h1>
          <div class="description">
            <p>${materialDescription}</p>
            <div class="colores">
              <div class="columns">
                <strong>Color: </strong>
                <div class="column is-1">
                  <div class="button is-primary colores blackColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores whiteColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores greyColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores redColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores blueColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores yellowColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores orangeColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores cyanColor"></div>
                </div>
                <div class="column is-1">
                  <div class="button is-primary colores purpleColor"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <section class="section is-medium recommendedApplications">
    <div class="container is-fullhd">
      <div class="columns">
        <div class="column is-one-third">
          <h3>Materials in this family</h3>
          ${materials}
        </div>
        ${matDesc1} 
        ${matDesc2}
        ${matDesc3}
      </div>
    </div>
  </section>
  <section class=" section backgroundLight material-specifications">
    <div class="container">
      <h2 class="is-title is-2">Specifications</h2>
      <br>
      <div class="columns  is-size-6">
        <div class="column is-one-fourth">
          <h4 class="title is-4">Description</h4>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Applications</strong>
            </div>
            <div class="column">
              <p>${application}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Strengths</strong>
            </div>
            <div class="column">
              <p>${advantages}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Weakness</strong>
            </div>
            <div class="column">
              <p> ${disadvantages}
              </p>
            </div>
          </div>
        </div>
        <div class="column is-one-fourth">
          <h4 class="title is-4">Characteristics</h4>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Price</strong>
            </div>
            <div class="column">
              <p> ${price}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Lead Time</strong>
            </div>
            <div class="column">
              <p>${waitTime} </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Tolerances</strong>
            </div>
            <div class="column">
              <p>${tolerances}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Max part size</strong>
            </div>
            <div class="column">
              <p>${maxPartSize1}
              </p>
            </div>
          </div>
        </div>
        <div class="column is-one-fourth">
          <h4 class="title is-4">Mechanical properties</h4>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Nozzle temperature</strong>
            </div>
            <div class="column">
              <p>${nozzleTemp}
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Printing speed</strong>
            </div>
            <div class="column">
              <p>${printingSpeed}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Bed temperature</strong>
            </div>
            <div class="column">
              <p>${bedTemp}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Bed surface</strong>
            </div>
            <div class="column">
              <p>${bedSurface}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-5">
              <strong class="is-size-6">Cooling fan</strong>
            </div>
            <div class="column">
              <p>${coolingFan}
              </p>
            </div>
          </div>
        </div>
        <div class="column is-one-fourth">
          <h4 class="title is-4">Thermal properties</h4>
          <div class="columns">
            <div class="column is-4">
              <strong class="is-size-6">Glass Transition Temperature</strong>
            </div>
            <div class="column">
              <p>${glassTemp}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <strong class="is-size-6">Vicat Softening Temperature </strong>
            </div>
            <div class="column">
              <p> ${vicatTemp}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <strong class="is-size-6">Melting temperature</strong>
            </div>
            <div class="column">
              <p>${meltingTemp}
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <strong class="is-size-6">Max part size</strong>
            </div>
            <div class="column">
              <p>${maxPartSize2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section is-medium gallery">
    <div class="container">
      <div class="columns mb-6 pb-6">
        <div class="column is-half">
          <img src="${featuredThumbnailImg}" alt="" style="display:block" class="mb-3">
          <span class="title is-4">${featuredText} </span><span>${normalText}.</span>
        </div>
        <div class="column">
          <h3 class="title is-3">Applications</h3>
          <p>${applications}</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <img src="${thumbnailImg[0]}" class="mb-5" style="display:block" alt="">
          <h5 class="title is-5">${thumbnailTitle[0]}</h5>
          <p>${thumbnailDescription[0]}
          </p>
        </div>
        <div class="column is-one-third">
          <img src="${thumbnailImg[1]}" class="mb-5" style="display:block" alt="">
          <h5 class="title is-5">${thumbnailTitle[1]}</h5>
          <p>${thumbnailDescription[1]}
          </p>

        </div>
        <div class="column is-one-third">
          <img src="${thumbnailImg[2]}" class="mb-5" style="display:block" alt="">
          <h5 class="title is-5">${thumbnailTitle[2]}</h5>
          <p>${thumbnailDescription[2]}
          </p>
        </div>
      </div>
    </div>
  </section>
  <footer data-w-id="1356e90d-e3a3-2953-9ae6-a897ae2f46c5" class="footer">
    <div class="container-default">
      <div class="footer-links-block">
        <div data-w-id="860ef3f3-f653-7152-d923-41d83ef45dfc" class="links-block">
          <div data-w-id="860ef3f3-f653-7152-d923-41d83ef45dfd" class="footer-mobile-title">
            <h3 class="footer-title">Pages<span class="dropdown-icon-footer"></span></h3>
          </div>
          <div class="footer-mobile-content">
            <div class="footer-content-links">
              <ul role="list" class="list-footer w-list-unstyled">
                <li class="footer-list-item">
                  <a href="index.html" class="footer-link">Home</a>
                </li>
                <li class="footer-list-item">
                  <a href="about-us.html" class="footer-link">Acerca de nosotros</a>
                </li>
                <li class="footer-list-item">
                  <a href="agenda.html" class="footer-link">Webinars</a>
                </li>
                <li class="footer-list-item">
                  <a href="speakers.html" class="footer-link">Speakers</a>
                </li>
                <li class="footer-list-item">
                  <a href="https://eventlytemplate.webflow.io/speaker/john-carter" class="footer-link w-inline-block">
                    <div>Speakers Individual</div>
                    <div class="badge">
                      <div>Cms</div>
                    </div>
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="conference.html" class="footer-link w-inline-block">
                    <div>Conference Platform</div>
                  </a>
                </li>
              </ul>
              <div class="spacer links-footer"></div>
              <ul role="list" class="list-footer w-list-unstyled">
                <li class="footer-list-item">
                  <a href="tickets.html" class="footer-link">Tickets</a>
                </li>
                <li class="footer-list-item">
                  <a href="https://eventlytemplate.webflow.io/product/deluxe-ticket" class="footer-link w-inline-block">
                    <div>Tickets Individual</div>
                    <div class="badge">
                      <div>Cms</div>
                    </div>
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="blog.html" class="footer-link">Blog</a>
                </li>
                <li class="footer-list-item">
                  <a href="https://eventlytemplate.webflow.io/post/5-great-marketing-trends-to-follow-in-2020"
                    class="footer-link w-inline-block">
                    <div>Blog Post</div>
                    <div class="badge">
                      <div>Cms</div>
                    </div>
                  </a>
                </li>
                <li class="footer-list-item">
                  <a href="contact.html" class="footer-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-w-id="3ae4d97e-25ab-6a63-49ae-7ffd30a9bffc" class="links-block">
          <div data-w-id="3ae4d97e-25ab-6a63-49ae-7ffd30a9bffd" class="footer-mobile-title">
            <h3 class="footer-title">políticas <span class="dropdown-icon-footer"></span></h3>
          </div>
          <div class="footer-mobile-content">
            <div class="footer-content-links">
              <ul role="list" class="list-footer w-list-unstyled">
                <li class="footer-list-item">
                  <a href="styleguide.html" class="footer-link">Style Guide</a>
                </li>
                <li class="footer-list-item">
                  <a href="licenses.html" class="footer-link">Licences</a>
                </li>
                <li class="footer-list-item">
                  <a href="https://eventlytemplate.webflow.io/404" class="footer-link">404 Not Found</a>
                </li>
                <li class="footer-list-item">
                  <a href="https://eventlytemplate.webflow.io/401" class="footer-link">Password Protected</a>
                </li>
                <li class="footer-list-item">
                  <a href="start-here.html" class="footer-link">Start Here</a>
                </li>
                <li class="footer-list-item">
                  <a href="#" class="footer-link">Changelog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-w-id="f885272b-6ee5-b466-1b95-c0cf79187b16" class="links-block newsletter">
          <h3 class="footer-title newsletter"><strong>sÚSCRIBETE A NUESTRO NEWSLETTER</strong></h3>
          <p class="paragraph newsletter">Suscríbete y enterate de nuevos materiales y procesos de manufactura que
            llegan a 3D FACTORY MX</p>
          <div class="w-form">
            <form id="email-form" name="email-form" data-name="Email Form" class="footer-form-newsletter"><input
                type="email" class="input newsletter w-input" maxlength="256" name="Email" data-name="Email"
                placeholder="Tu correo elonectrico" id="Email" required=""><input type="submit" value="Suscribirme"
                data-wait="Please wait..." class="button-primary newsletter w-button"></form>
            <div class="success-message w-form-done">
              <div>Thanks for joining the Evently Newsletter</div>
            </div>
            <div class="error-message w-form-fail">
              <div>Oops! Something went wrong </div>
            </div>
          </div>
          <div class="footer-social-media-wrapper">
            <a href="https://www.facebook.com/" class="footer-social-media-link-wrapper w-inline-block">
              <div></div>
            </a>
            <div class="spacer footer-social-media"></div>
            <a href="https://twitter.com/" class="footer-social-media-link-wrapper w-inline-block">
              <div></div>
            </a>
            <div class="spacer footer-social-media"></div>
            <a href="https://www.instagram.com/" class="footer-social-media-link-wrapper w-inline-block">
              <div></div>
            </a>
            <div class="spacer footer-social-media"></div>
            <a href="https://www.linkedin.com/" class="footer-social-media-link-wrapper w-inline-block">
              <div></div>
            </a>
          </div>
        </div>
      </div>
      <div data-w-id="76ca228a-f8f3-30dc-0a18-ad54764b64fe" class="footer-bottom">
        <a href="index.html" class="footer-logo-container w-inline-block"></a>
        <div class="mouse-print">Copyright 2020 © Evently | Designed by <a href="https://brixtemplates.com/"
            class="mouse-print-link">BRIX Templates</a> - Powered by <a href="https://webflow.com/"
            class="mouse-print-link">Webflow</a>
        </div>
      </div>
    </div>
  </footer>
  <script src="./template.js"></script>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa38f37558048f48c45d2eb"
    type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
`   
  localStorage.input = templateBody
    window.open('./template.html', "_blank")
})