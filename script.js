const keyboard = {
    elements : {
       main: null,
       textarea: null,
       keyboard: null,
    },


    properties : {
        value: " ",
        ru: localStorage.getItem('ru'),
        capsLock: false,
    },

    basepage () {
        this.elements.textarea = document.createElement('textarea');
        this.elements.main = document.createElement('div');
        this.elements.keyboard = document.createElement('ul');

        this.elements.textarea.classList.add('textarea')
        this.elements.main.classList.add('page');
        this.elements.keyboard.appendChild(this.initbuttons());
        this.elements.main.appendChild(this.elements.keyboard);
        document.body.prepend(this.elements.main);
        this.elements.main.prepend(this.elements.textarea);
        
    },

    initbuttons() {
        const fragment = document.createDocumentFragment();
        let buttons = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "tab",
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",
            "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "enter",
            "shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑","shift",
            "ctrl", "win", "alt", " ", "alt", "ctrl", "←", "↓", "→"
        ];

        let shiftButtons = [
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "backspace", "tab",
            "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", '|',
            "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":",  '"', "enter",
            "shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑","shift",
            "ctrl", "win", "alt", " ", "alt", "ctrl", "←", "↓", "→"
        ];

        let shiftButtonsPic = [
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "",
            "", "", "", "", "", "", "", "", "", "", "{", "}",'|',
            "", "", "", "", "", "", "", "", "", "", ":",  '"', "",
            "", "", "", "", "", "", "", "", "<", ">", "?", "","",
            "", "", "", "", "", "", "", "", ""
        ];

        let rusButtons = [
            "Ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace", "tab",
            "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",'\\',
            "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "enter",
            "shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑","shift",
            "ctrl", "win", "alt", " ", "alt", "ctrl", "←", "↓", "→"
        ];

        let rusShiftButtons = [
            "Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "backspace", "tab",
            "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",'/',
            "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж",  'Э', "enter",
            "shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑","shift",
            "ctrl", "win", "alt", " ", "alt", "ctrl", "←", "↓", "→"
        ];

        let rusShiftButtonsPic = [
            "", '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "", "",
            "", "", "", "", "", "", "", "", "", "", "", "", '/',
            "", "", "", "", "", "", "", "", "", "", "",  '', "",
            "", "", "", "", "", "", "", "", "", "", ",", "","",
            "", "", "", "", "", "", "", "", ""
        ];

        let buttonsCode = [
            "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab",
            "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash",
            "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
            "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "topArr","ShiftRight",
            "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "leftArr", "botArr",  "rightArr"
        ];

        let elementWhich = [
            "192", "49", "50", "51", "52", "53", "54", "55", "56", "57", "48", "189", "187", "8", "9",
            "81", "87", "69", "82", "84", "89", "85", "73", "79", "80", "219", "221","220",
            "20", "65", "83", "68", "70", "71", "72", "74", "75", "76", "186", "222", "13",
            "16", "90", "88", "67", "86", "66", "78", "77", "188", "190", "191", "38","16",
            "17", "91", "18", "32", "18", "17", "37", "40",  "39"
        ];

        let j = 0;

        if (localStorage.getItem('ru') == null) {
            localStorage.setItem('ru', 'false');
        }
        document.addEventListener('keydown', () => {
            if (event.altKey && event.shiftKey) {
                this.properties.ru == 'true' ? this.properties.ru = 'false' : this.properties.ru = 'true';
                localStorage.setItem('ru', this.properties.ru);
                document.querySelectorAll('span').forEach(item => {
                if (this.properties.ru == 'false') {
                    if (item.classList.contains('ru') || item.classList.contains('rusShiftButPic')) {
                        item.classList.add('hidden');
                    }
                    else if (item.classList.contains('eng') || item.classList.contains('ShiftButPic')){
                        item.classList.remove('hidden');
                    }
                }
                else if (this.properties.ru == 'true') {
                    if (item.classList.contains('eng') || item.classList.contains('ShiftButPic')){
                        item.classList.add('hidden');
                    }
                    else if (item.classList.contains('ru') || item.classList.contains('rusShiftButPic')){
                        item.classList.remove('hidden');
                    }
                }
                })
            }
        })
        
        let i = 0;

        document.addEventListener('keydown', () => {
            switch(event.code) {
                case 'Backspace': 
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                break;

                case "Tab":
                    event.preventDefault();
                        this.properties.value += '\t';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "CapsLock":
                        this.properties.capsLock == true ? this.properties.capsLock = false : this.properties.capsLock = true;
                        this.properties.capsLock == true ? document.getElementsByClassName(`caps`)[0].style.backgroundColor = 'coral' : document.getElementsByClassName(`caps`)[0].style.backgroundColor = '';
                        this.properties.capsLock == true ? document.getElementsByClassName(`caps`)[0].style.transition = 'background-color 0.3s linear' : document.getElementsByClassName(`caps`)[0].style.backgroundColor = '';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "Enter":
                        this.properties.value += '\n';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "Space":
                        this.properties.value += ' ';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "ShiftLeft":
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "AltLeft":
                        event.preventDefault();
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "MetaLeft":
                        event.preventDefault();
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "ControlLeft":
                        document.getElementsByClassName('ctrl')[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                    break;

                    case "ShiftRight":
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[1].style.transition = 'background-color 0.3s linear';
                    break;


                    case "ControlRight":
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[1].style.transition = 'background-color 0.3s linear';
                    break;

                    case "ArrowLeft":
                        this.properties.value += '←';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "ArrowRight":
                        this.properties.value +=  "→";
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "ArrowUp":
                        this.properties.value += '↑';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "ArrowDown":
                        this.properties.value += '↓';
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    break;

                    case "AltRight":
                        event.preventDefault();
                        document.getElementsByClassName('alt')[1].style.backgroundColor = 'coral';
                        document.getElementsByClassName(`${event.which}`)[1].style.transition = 'background-color 0.3s linear';
                        document.getElementsByClassName('ctrl')[0].style.backgroundColor = ''
                    break;


            default:
                  if  (this.properties.ru == "false") {
                this.properties.capsLock == false ? (event.shiftKey == false ?  this.properties.value += document.getElementsByClassName(`${event.code}`)[0].textContent.toLowerCase() : this.properties.value += document.getElementsByClassName(`${event.code}`)[2].textContent) : (event.shiftKey == false ? this.properties.value += document.getElementsByClassName(`${event.code}`)[0].textContent : this.properties.value += document.getElementsByClassName(`${event.code}`)[2].textContent.toLowerCase());
                document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear,border-radius 0.3s linear ';
                document.getElementsByClassName(`${event.which}`)[0].style.borderRadius = '20%';
            }
                 else if  (this.properties.ru == "true") {
                    this.properties.capsLock == false ? (event.shiftKey == false ?  this.properties.value += document.getElementsByClassName(`${event.code}`)[1].textContent.toLowerCase() : this.properties.value += document.getElementsByClassName(`${event.code}`)[3].textContent) : (event.shiftKey == false ? this.properties.value += document.getElementsByClassName(`${event.code}`)[1].textContent : this.properties.value += document.getElementsByClassName(`${event.code}`)[3].textContent.toLowerCase());
                document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = 'coral';
                document.getElementsByClassName(`${event.which}`)[0].style.transition = 'background-color 0.3s linear,border-radius 0.3s linear ';
                document.getElementsByClassName(`${event.which}`)[0].style.borderRadius = '20%';
            } 
            document.getElementsByTagName ('textarea')[0].value = this.properties.value;    
            }
        })

        document.addEventListener('keyup', function(event) {
            switch(event.key) {
                case 'CapsLock' :
                    break;

                    case 'Control' :
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = '';
                        document.getElementsByClassName('ctrl')[0].style.backgroundColor = '';
                    break;

                    case 'Alt' :
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = '';
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = '';
                    break;

                    case 'AltGraph' :
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = '';
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = '';
                    break;

                    case 'Shift' :
                        document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = '';
                        document.getElementsByClassName(`${event.which}`)[1].style.backgroundColor = '';
                    break;

                        default:
            document.getElementsByClassName(`${event.which}`)[0].style.backgroundColor = '';
            document.getElementsByClassName(`${event.which}`)[0].style.borderRadius = '';
            
            
            
            
            }
        });


        buttons.forEach(button =>  {
            const buttonElement = document.createElement('li');
            buttonElement.classList.add(`${elementWhich[i]}`)
            const lineBreak = ["backspace", "\\", "enter", "rshift"].indexOf(button) !== -1;
            buttonElement.classList.add('usual');
            let buttonImg = document.createElement('span');
            buttonImg.classList.add('eng');
            buttonImg.classList.add(`${buttonsCode[i]}`);
            buttonImg.id = `${buttons[i]}`;
            let rusButtonImg = document.createElement('span');
            rusButtonImg.id = `${rusButtons[i]}`;
            rusButtonImg.classList.add('ru');
            rusButtonImg.classList.add(`${buttonsCode[i]}`);
            let shiftButton = document.createElement('span');
            shiftButton.id = `${shiftButtons[i]}`;
            shiftButton.classList.add('shiftBut');
            shiftButton.classList.add('hidden');
            shiftButton.classList.add(`${buttonsCode[i]}`);
            let shiftButtonPic = document.createElement('span');
            shiftButtonPic.classList.add('ShiftButPic');
            let rusShiftButtonPic = document.createElement('span');
            rusShiftButtonPic.classList.add('rusShiftButPic');
            let rusShiftButton = document.createElement('span');
            rusShiftButton.classList.add('rusShiftBut');
            rusShiftButton.classList.add('hidden');
            rusShiftButton.classList.add(`${buttonsCode[i]}`)
            this.properties.ru == 'true' ? buttonImg.classList.add('hidden') : rusButtonImg.classList.add('hidden');
            this.properties.ru == 'true' ? shiftButtonPic.classList.add('hidden') : rusShiftButtonPic.classList.add('hidden');
            buttonImg.insertAdjacentText('afterbegin', buttons[i]);
            rusButtonImg.insertAdjacentText('afterbegin', rusButtons[i]);
            shiftButton.insertAdjacentText('afterbegin', shiftButtons[i]);
            rusShiftButton.insertAdjacentText('afterbegin', rusShiftButtons[i]);
            shiftButtonPic.insertAdjacentText('afterbegin', shiftButtonsPic[i]);
            rusShiftButtonPic.insertAdjacentText('afterbegin', rusShiftButtonsPic[i]);
            i++;
            let paragraph = document.createElement('p');
            paragraph.insertAdjacentText('beforeend', 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe shift + alt ');
            buttonElement.appendChild(buttonImg);
            buttonElement.appendChild(rusButtonImg);
            buttonElement.appendChild(shiftButton);
            buttonElement.appendChild(rusShiftButton);
            buttonElement.appendChild(shiftButtonPic);
            buttonElement.appendChild(rusShiftButtonPic);


            switch(button) {
                case "backspace":
                    buttonElement.classList.add('backspace');
                    buttonElement.addEventListener('click', () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "\\":
                    buttonElement.classList.add('backslash');
                    buttonElement.addEventListener('click', () => {
                        if (this.properties.ru == 'false') {
                            this.properties.capsLock == false ? this.properties.value += buttonElement.textContent.substring(0,1).toLowerCase() : this.properties.value += buttonElement.textContent.substring(0,1);
                        }
                        else if (this.properties.ru == 'true') {
                            this.properties.capsLock == false ? this.properties.value += buttonElement.textContent.substring(1,2).toLowerCase() : this.properties.value += buttonElement.textContent.substring(1,2);
                        }        
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "tab":
                    buttonElement.classList.add('tab');   
                    buttonElement.addEventListener('click', () => {
                        this.properties.value += '\t';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "CapsLock":
                    buttonElement.classList.add('caps');
                    buttonElement.addEventListener('mousedown', () => {
                        this.properties.capsLock == true ? this.properties.capsLock = false : this.properties.capsLock = true;
                        this.properties.capsLock == true ? document.getElementsByClassName(`caps`)[0].style.backgroundColor = 'coral': document.getElementsByClassName(`caps`)[0].style.backgroundColor = '';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "enter":
                    buttonElement.classList.add('enter');
                    buttonElement.addEventListener('click', () => {
                        this.properties.value += '\n';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case " ":
                    buttonElement.classList.add('space');
                    buttonElement.addEventListener('click', () => {
                        this.properties.value += ' ';
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "shift":
                    buttonElement.classList.add('shift');
                    buttonElement.addEventListener('click', () => {
                        /*this.properties.value += ' ';*/
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "rshift":
                    buttonElement.classList.add('shift');
                    buttonElement.addEventListener('click', () => {
                        /*this.properties.value += ' ';*/
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "ctrl":
                    buttonElement.classList.add('ctrl');
                    buttonElement.addEventListener('click', () => {
                        document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                    });
                    break;

                    case "win":
                        buttonElement.classList.add('win');
                        buttonElement.addEventListener('click', () => {
                            document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                        });
                        break;

                        case "alt":
                        buttonElement.classList.add('alt');
                        buttonElement.addEventListener('click', () => {
                            document.getElementsByTagName ('textarea')[0].value = this.properties.value;
                        });
                        break;


            
            
            default:
            buttonElement.addEventListener('click', () => {
                if (this.properties.ru == 'false') {
                    this.properties.capsLock == false ? this.properties.value += buttonElement.textContent.substring(0,1).toLowerCase() : this.properties.value += buttonElement.textContent.substring(0,1);
                }
                else if (this.properties.ru == 'true') {
                    this.properties.capsLock == false ? this.properties.value += buttonElement.textContent.substring(1,2).toLowerCase() : this.properties.value += buttonElement.textContent.substring(1,2);
                }
                
                document.getElementsByTagName ('textarea')[0].value = this.properties.value;

            })


        }


            fragment.appendChild(buttonElement);

            if (lineBreak) {
                fragment.appendChild(document.createElement('br'));
            }
        });
        let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph')
        paragraph.insertAdjacentText('beforeend', 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: shift + alt ');
        fragment.appendChild(paragraph);
        return fragment;
        
    },

}

keyboard.basepage();

