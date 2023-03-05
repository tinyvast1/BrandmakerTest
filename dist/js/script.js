'use strict';
document.addEventListener('DOMContentLoaded', () => {
    class ProdustCard {
        constructor(
            title, 
            titleClasslist, 
            
            imgSrc,
            imgQuantity,
            imgBlockClasslist,
            imgClasslist,
            imgParent,
            imgMainClasslist,
            
            deliver,
            deliverClasslist, 
            
            equipmentTitle,
            equipmentPrice,
            equipmentClasslist,
            equipmentParent,
            
            availability, 
            availabilityClasslistIndicators,
            availabilityClasslistText,

            indicatorsCardTop,
            indicatorsCardLeft,
            indicatorsCardClasslistParrent,
            indicatorsCardClasslistBlock,
            indicatorsCheckSize
            ) { 


            this.title = title;
            this.titleClasslist = titleClasslist;

            this.imgSrc = imgSrc;
            this.imgQuantity = imgQuantity;
            this.imgBlockClasslist = imgBlockClasslist;
            this.imgClasslist = imgClasslist;
            this.imgParent = imgParent;
            this.imgMainClasslist = imgMainClasslist;
            
            this.deliver = deliver;
            this.deliverClasslist = deliverClasslist;
            
            this.equipmentTitle = equipmentTitle;
            this.equipmentPrice = equipmentPrice;
            this.equipmentClasslist = equipmentClasslist;
            this.equipmentParent = equipmentParent;
            
            this.availability = availability;
            this.availabilityClasslistIndicators = availabilityClasslistIndicators;
            this.availabilityClasslistText = availabilityClasslistText;

            this.indicatorsCardTop = indicatorsCardTop;
            this.indicatorsCardLeft = indicatorsCardLeft;
            this.indicatorsCardClasslistParrent = indicatorsCardClasslistParrent;
            this.indicatorsCardClasslistBlock = indicatorsCardClasslistBlock;
            this.indicatorsCheckSize = indicatorsCheckSize;

        }

        renderTitle() {
            this.titleClasslist.forEach((item)=> {
                document.querySelector(item).innerHTML = this.title;
            });
        }
        
        renderImg() {
            for (let i = 0; this.imgQuantity > i; i++) {
                const element = document.createElement('div'),
                img = document.createElement('img');
                element.classList.add(this.imgBlockClasslist.substring(1));
                if (i == 0) {
                    element.classList.add(`${this.imgBlockClasslist.substring(1)}-main`);
                }
                img.classList.add(this.imgClasslist.substring(1));
                img.src = this.imgSrc.replaceAll('.',`${i+1}.`);
                this.imgParent.append(element);
                element.append(img);
                
            }
        }
        
        renderDelider() {
            document.querySelector(this.deliverClasslist).innerHTML = this.deliver;
        }

        renderEquipment() {
            this.equipmentTitle.forEach((item,i) => {
                const element = document.createElement('div');
                element.classList.add(this.equipmentClasslist.substring(1));
                element.innerHTML = `
                        <div class="equipment__indicators">${i+1}</div>
                        <div class="equipment__information">
                            <div class="equipment__title">${item}</div>
                            <div class="equipment__price">
                            от 
                            <span>${this.equipmentPrice[i].toLocaleString()}</span>
                            руб
                            </div>
                        </div>
                        <div class="equipment__quantity">
                        <input class="equipment__quantity-input" type="text">
                        <div class="equipment__quantity-btns">
                        <button class="equipment__quantity-btn equipment__quantity-btn-plus">
                        <img src="icons/arrow.svg" alt="Стрелка верх">
                        </button>
                        <button class="equipment__quantity-btn equipment__quantity-btn-minus">
                        <img src="icons/arrow.svg" alt="Стрелка вниз">
                        </button>
                        </div>
                        </div>
                        `;
                        this.equipmentParent.append(element);
                    });
        }
        
        renderIndicatorsCard() {
            this.indicatorsCheckSize();

            const indicatorsCardParrent = document.createElement('div'),
                imgMain = document.querySelector(this.imgMainClasslist);

            indicatorsCardParrent.classList.add(this.indicatorsCardClasslistParrent.substring(1));

            this.indicatorsCardTop.forEach((item, i)=> {
                const indicatorsCard = document.createElement('div');

                indicatorsCard.classList.add(this.indicatorsCardClasslistBlock.substring(1));
                
                indicatorsCard.innerHTML = `
                    <div class="indicators-card__number">${i+1}</div>
                    <div class="indicators-card__information">
                        <div class="indicators-card__title">${this.equipmentTitle[i]}</div>
                        <div class="indicators-card__price">от <span>${this.equipmentPrice[i].toLocaleString()}</span> руб</div>
                    </div>
                `;
                indicatorsCard.style.top = `${item}px`;
                indicatorsCard.style.left = `${this.indicatorsCardLeft[i]}px`;
                
                indicatorsCardParrent.append(indicatorsCard);
            });
            imgMain.append(indicatorsCardParrent);
        }

        renderAvailability() {
            const availability = document.createElement('div');

            availability.classList.add('availability');
            availability.innerHTML = `
                <div class="availability__indicators"></div>
                <div class="availability__text"></div>
            `;
            document.querySelector(this.imgMainClasslist).append(availability);
            if (this.availability) {
                document.querySelector(this.availabilityClasslistIndicators)
                .classList.add(`${this.availabilityClasslistIndicators.substring(1)}-true`);
                document.querySelector(this.availabilityClasslistText)
                .innerHTML = 'в наличии';
            } else {
                document.querySelector(this.availabilityClasslistIndicators)
                .classList.add(`${this.availabilityClasslistIndicators.substring(1)}-false`);
                document.querySelector(this.availabilityClasslistText)
                .innerHTML = 'нет в наличии';
            }
        }

    }
    
    function renderGammaDirect() {
        const title = 'GAMMA DIRECT',
        titleClasslist = ['.breadcrumbs__link-active span', '.application__title'],

        imgSrc = `img/GAMMA-DIRECT/.webp`,
        imgQuantity = 4,
        imgBlockClasslist = '.product-card-slider__item',
        imgClasslist = '.product-card-slider__img',
        imgParent = document.querySelector('.product-card-slider__items'),
        imgMainClasslist = '.product-card-slider__item-main',
        
        
        delider = 'Завтра после 12:00',
        deliverClasslist = '.deliver__text span',
        
        equipmentTitle = [
            'Стол руководителя',
            'Брифинг-приставка',
            'Тумба с ящиками',
            'Шкаф для одежды',
            'Кресло руководителя',
            'Кресло посетителя'
        ],
        equipmentPrice = [
            27900,
            14600,
            10500,
            55000,
            43800,
            13500,
        ],
        equipmentClasslist = '.equipment__item',
        equipmentParent = document.querySelector('.equipment__items'),
        
        availability = true,
        availabilityClasslistIndicators = '.availability__indicators',
        availabilityClasslistText = '.availability__text',

        indicatorsCardClasslistParrent = '.indicators-card',
        indicatorsCardClasslistBlock = '.indicators-card__item';
        let indicatorsCardTopStart = [
                201,
                237,
                138,
                13,
                131,
                169
            ],
            indicatorsCardLeftStart = [
                222,
                500,
                249,
                109,
                137,
                662
            ],
            indicatorsCardLeft = new Array (indicatorsCardLeftStart.length),
            indicatorsCardTop = new Array (indicatorsCardTopStart.length);
        
        function indicatorsCheckSize() {
            const img = new Image(),
            imgMain = document.querySelector('.product-card-slider');
            img.onload = function() {
            };
            img.src = 'img/GAMMA-DIRECT/1.webp';
            imgMain.style.height = `${Math.round(imgMain.offsetWidth*(img.height / img.width))}px`;

            function indicatorsCardSCalculation(directionStart, direction, sizeImg, sizeImgStart) {
                directionStart.forEach((item, i) => {
                    direction[i] = Math.round((sizeImg / 100) * (item / (sizeImgStart / 100)));
                });
            }

            indicatorsCardSCalculation(indicatorsCardTopStart, indicatorsCardTop, imgMain.offsetHeight, img.height);

            indicatorsCardSCalculation(indicatorsCardLeftStart, indicatorsCardLeft, imgMain.offsetWidth, img.width);

        }

        indicatorsCheckSize();
    
        const gammaDirect = new ProdustCard(
            title,
            titleClasslist,

            imgSrc,
            imgQuantity,
            imgBlockClasslist,
            imgClasslist,
            imgParent,
            imgMainClasslist,
            
            delider,
            deliverClasslist,

            equipmentTitle,
            equipmentPrice,
            equipmentClasslist,
            equipmentParent,

            availability,
            availabilityClasslistIndicators,
            availabilityClasslistText,

            indicatorsCardTop,
            indicatorsCardLeft,
            indicatorsCardClasslistParrent,
            indicatorsCardClasslistBlock,
            indicatorsCheckSize
            );
    
        gammaDirect.renderTitle();
        gammaDirect.renderImg();
        gammaDirect.renderDelider();
        gammaDirect.renderEquipment();
        
        gammaDirect.renderIndicatorsCard();
        
        gammaDirect.renderAvailability();


        window.addEventListener("resize", () => {
            indicatorsCheckSize();
            document.querySelectorAll(indicatorsCardClasslistBlock).forEach((item, i) => {
                item.style.top = `${indicatorsCardTop[i]}px`;
                item.style.left = `${indicatorsCardLeft[i]}px`;
            });
        });
    }

    renderGammaDirect();


    //clickIndicators

    const indicatorsCardBtn = document.querySelectorAll('.indicators-card__number'),
        indicatorsCardInformation = document.querySelectorAll('.indicators-card__information');

    indicatorsCardBtn.forEach((item, i)=> {
        indicatorsCardBtn[i].addEventListener('click', (item) => {
            if (indicatorsCardInformation[i].classList.contains('indicators-card__information-active')) {
                indicatorsCardInformation[i].classList.remove('indicators-card__information-active');
            } else {
                indicatorsCardInformation[i].classList.add('indicators-card__information-active');
            }
        });
    });


    //price

    const priceBtnPlus = document.querySelectorAll('.equipment__quantity-btn-plus'),
    priceBtnMinus = document.querySelectorAll('.equipment__quantity-btn-minus'),

    priceTitle = document.querySelectorAll('.equipment__title'),
    quantityInput = document.querySelectorAll('.equipment__quantity-input'),

    priceItem = document.querySelectorAll('.equipment__price span'),
    
    totalPriceValue = document.querySelector('.total-price__value'),
    totalPriceTitle = document.querySelector('.total-price__title'),
    totalPriceNotify = document.querySelector('.total-price__notify'),
    totalPriceHint = document.querySelector('.total-price__hint');


    function quantityInputZero() {
        quantityInput.forEach((item, i) => {
            quantityInput[i].value = 0;
        });
    }

    // function priceTitleOneWidth(){
    //     let maxWidth = 0;

    //     priceTitle.forEach((item) => {
    //         const width = item.offsetWidth;
    //         console.log(width);
    //         if (maxWidth < width) {
    //             maxWidth = width;
    //         }
    //     });

    //     priceTitle.forEach((item) => {
    //         item.style.width = `${maxWidth + 10}px`;
    //     });
    // }
    

    function clickpriceBtnPlus() {
        priceBtnPlus.forEach((item, i) => {
            priceBtnPlus[i].addEventListener('click', () => {
                if (quantityInput[i].value != '') {
                    quantityInput[i].value = parseInt(quantityInput[i].value) + 1;
                } else {
                    quantityInput[i].value = 1;
                }
                calculationTotalPrice();
                totalPriceOpacity();
            });
        });
    }
    
    function clickpriceBtnMinus() {
        priceBtnMinus.forEach((item, i) => {
            priceBtnMinus[i].addEventListener('click', () => {
                if (quantityInput[i].value != 0) {
                    quantityInput[i].value = parseInt(quantityInput[i].value) - 1;
                }
                calculationTotalPrice();
                totalPriceOpacity();
            });
        });
    }

    function calculationTotalPrice() {
        let totalPrice = 0;
        quantityInput.forEach((item, i) => {
            if (quantityInput[i].value != '') {
                totalPrice += ( (parseInt ( (priceItem[i].innerHTML).replaceAll('&nbsp;', '') )) *
                parseInt(quantityInput[i].value) );
            } else {
                totalPrice += ( (parseInt ( (priceItem[i].innerHTML).replaceAll('&nbsp;', '') )) *
                0);
            }
        });

        return totalPrice;
    }


    function AddRemoveClasslist(item, bool, classList) {
        if (bool) {
            item.classList.add(`${classList}-active`);
        } else {
            item.classList.remove(`${classList}-active`);
        }
    }

    function totalPriceOpacity() {
        if (calculationTotalPrice() == 0) {
            AddRemoveClasslist(totalPriceHint, true, 'total-price__hint');
            AddRemoveClasslist(totalPriceNotify, false, 'total-price__notify');
            AddRemoveClasslist(totalPriceValue, false, 'total-price__value');
            totalPriceValue.innerHTML = '';
            totalPriceTitle.innerHTML = 'Цена за комплект';
        } else {
            AddRemoveClasslist(totalPriceHint, false, 'total-price__hint');
            AddRemoveClasslist(totalPriceNotify, true, 'total-price__notify');
            AddRemoveClasslist(totalPriceValue, true, 'total-price__value');
            totalPriceTitle.innerHTML = `
                Цена за комплект от 
                <div class="total-price__value">${(calculationTotalPrice()).toLocaleString()} руб</div>
            `;
        }
    }

    function checkInput() {
        quantityInput.forEach((item) => {
            item.addEventListener('input', () => {
                calculationTotalPrice();
                totalPriceOpacity();
            });
        });
    }
    
    quantityInputZero();
    calculationTotalPrice();
    clickpriceBtnMinus();
    clickpriceBtnPlus();
    totalPriceOpacity();
    checkInput();

    // priceTitleOneWidth();

    //modal

    const BtnOpenModal = document.querySelectorAll('.btn'),
        BtnApplicationClasslist = 'btn__application',
        BtnScetchClasslist = 'btn__sketch',
        modal = document.querySelector('.modal'),
        modalTitle = document.querySelector('.modal__title'),
        modalText = document.querySelector('.modal__text'),
        modalCloseBtn = document.querySelector('.modal__close'),
        modalOverlay = document.querySelector('.modal__overlay');
    
    function modalOpen() {
        BtnOpenModal.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.classList.contains(BtnScetchClasslist)) {
                    modalTitle.innerHTML = 'Бесплатно разработаем эскизный проект';
                    modalText.innerHTML = 'Вашего будущего кабинета, подберём мебель и рассчитаем точную стоимость за 1 час';
                }
                if (item.classList.contains(BtnApplicationClasslist)) {
                    modalTitle.innerHTML = 'Мы перезвоним Вам';
                    modalText.innerHTML = 'и поможем определиться с комплектацией, размерами и цветом мебели. А так же бесплатно составим эскизный проект и рассчитаем точную стоимости и сроки.';
                }
                modal.classList.add('modal-active');
            });
        });
    }
    function modalClose(item) {
        item.addEventListener('click', () => {
            modal.classList.remove('modal-active');
        });
    }

    modalClose(modalCloseBtn);
    modalClose(modalOverlay);
    modalOpen();

    //maskPhone

    function maskPhone(classList, masked) {
        const elems = document.querySelectorAll(classList);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            console.log(template);
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
        
    }

    maskPhone( '.modal__input-phone','+7 (___) ___-__-__');
    
    //createDots

    function createDots() {
        const dotsWrapper = document.createElement('div');

            dotsWrapper.classList.add('product-card-slider__dots');

            document.querySelectorAll('.product-card-slider__item').forEach(() => {
                const dots = document.createElement('div');
                dots.classList.add('product-card-slider__dot');
                dotsWrapper.append(dots);
            });

            document.querySelector('.product-card-slider').append(dotsWrapper);

    }

    createDots();

    //slider width


    //slider
    const slider = document.querySelector('.product-card-slider__items'),
        sliderItem = document.querySelectorAll('.product-card-slider__item'),
        firstSlide = (sliderItem[0]).cloneNode(true),
        lastSlide = (sliderItem[sliderItem.length - 1]).cloneNode(true),
        sliderDot = document.querySelectorAll('.product-card-slider__dot');
    let
        active = 1,
        width = -active*100,
        checkSlide = true;
        
        function dotsActive(active) {
        sliderDot.forEach((item, i) => {
            item.classList.remove('product-card-slider__dot-active');
        });
        sliderDot[active-1].classList.add('product-card-slider__dot-active');
    }
    function dotsClick() {
        sliderDot.forEach((item, i)=>{
            item.addEventListener('click',()=> {
                active = i + 1;
                width = -active * 100;
                slider.style.transform = `translateX(${width}%)`;
                dotsActive(active);
            });
        });
    }
    

    function checkFirstSlide() {
        if (width == 0) {
            width = -sliderItem.length*100;
            slider.style.transform = `translateX(${width}%)`;
        }
    }
    function checkLastSlide() {
        if (width == -((sliderItem.length+1)*100)) {
            width = -100;
            slider.style.transform = `translateX(${width}%)`;
        }
    }

    function NextSlide() {
        if (checkSlide && window.innerWidth <= 768) {
            let i = 0;
            let animationTimer = setInterval(() => {
                if (i == 99) {
                    clearInterval(animationTimer);
                }
                width -= 1;
                i++;
                slider.style.transform = `translateX(${width}%)`;
                checkLastSlide();  
            }, 3);
            if (active < sliderItem.length) {
                active++;
            }   else {
                active = 1;
            }  
            dotsActive(active);
            checkSlide = false;
            setTimeout(()=>{
                checkSlide = true;
            }, 400);
        }
    }
    
    function PrevSlide() {
        if (checkSlide && window.innerWidth <= 768) {
            let i = 0;
            let animationTimer = setInterval(() => {
                if (i == 99) {
                    clearInterval(animationTimer);
                }
                width += 1;
                i++;
                slider.style.transform = `translateX(${width}%)`;
                checkFirstSlide();
            }, 3);
            if (active > 1) {
                active--;
            }   else {
                active = sliderItem.length;
            }
            dotsActive(active);
            checkSlide = false;
            setTimeout(()=>{
                checkSlide = true;
            }, 400);
        }
    }

    //slider touch

    slider.addEventListener('touchstart', handleTouchStart, false);        
    slider.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;                                                        
    var yDown = null;
    
    function getTouches(evt) {
        return evt.touches ||             
            evt.originalEvent.touches;
    }                                                     
    
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                            
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }
        
        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;
        
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                NextSlide();
                
            } else {
                PrevSlide();
            }                       
        }
        xDown = null;
        yDown = null;                                             
    };
        
        
    //slider width

    function sliderWidth() {
        if (window.innerWidth <= 768) {
            active = 1;
            width = -active*100;
            slider.style.transform = `translateX(${width}%)`;

            dotsActive(active);
            dotsClick();

            sliderItem[0].before(lastSlide);
            sliderItem[sliderItem.length-1].after(firstSlide);
        } else {
            active = 0;
            width = -active*100;
            slider.style.transform = `translateX(${0}%)`;
            lastSlide.remove();
            firstSlide.remove();
        }
    }
            
    sliderWidth();

    window.addEventListener('resize', () => {
        sliderWidth();
    });

    //slider width//

    //breadcrumbsOffset

    const breadcrumbsContainer = document.querySelector('.breadcrumbs__container'),
    breadcrumbsItems = document.querySelector('.breadcrumbs__items'),
    breadcrumbsItem = document.querySelectorAll('.breadcrumbs__item');
    let MaxTransform = 0,
     stepTransform = 4;

    function MaxTransformCalculation() {
        MaxTransform = 0;
        breadcrumbsItem.forEach((item, i) => {
            MaxTransform += item.offsetWidth;
        });
        MaxTransform -= breadcrumbsContainer.offsetWidth - 40; 
    }

    MaxTransformCalculation();

    window.addEventListener("resize", () => {
        MaxTransformCalculation();
        breadcrumbsOffsetQuantity = 0;
        breadcrumbsItems.style.transform = `translateX(${breadcrumbsOffsetQuantity}px)`;
    });

    var event = null,
    breadcrumbsOffsetQuantity = 0,
    moveDataEnd = 0;

    breadcrumbsContainer.addEventListener("touchstart", function (e) {
        event = e;
    });

    breadcrumbsContainer.addEventListener("touchmove", function (e) {
        const moveDataStart = e.touches[0].clientX + event.touches[0].clientX;
        if (event && moveDataEnd < moveDataStart &&  breadcrumbsOffsetQuantity <= 0 ) {
            
            breadcrumbsOffsetQuantity += stepTransform;
           
            if (breadcrumbsOffsetQuantity == -stepTransform ) {
                breadcrumbsOffsetQuantity = stepTransform;
            }
            breadcrumbsItems.style.transform = `translateX(${breadcrumbsOffsetQuantity}px)`;

            moveDataEnd = moveDataStart;     
        }
        if ((event && moveDataEnd > moveDataStart && breadcrumbsOffsetQuantity > -MaxTransform) || (breadcrumbsOffsetQuantity == 0) ) {

            breadcrumbsOffsetQuantity -= stepTransform;

            breadcrumbsItems.style.transform = `translateX(${breadcrumbsOffsetQuantity}px)`;

            moveDataEnd = moveDataStart;     
        }
    });

    breadcrumbsContainer.addEventListener("touched", function (e) {
        event = null;
    });
    
});