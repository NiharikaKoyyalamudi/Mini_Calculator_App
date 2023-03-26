const keys = document.querySelectorAll('button');
const result = document.querySelector('#result');

keys.forEach(key => {
	key.addEventListener('click', () => {
		const keyValue = key.value;
		let currentResult = result.value;
		if (keyValue == '=') {
			currentResult = eval(currentResult); 
            result.value = currentResult;
            display.innerHTML = ''; 
            } 
            else if (keyValue == 'C') 
            {
                result.value = ''; 
                display.innerHTML = ''; 
            }
             else 
             {
                result.value += keyValue; 
                display.innerHTML += keyValue; 
            }
        });
        key.addEventListener('mouseover', () => {
            key.style.backgroundColor = 'pink';
        });
        key.addEventListener('mouseout', () => {
            key.style.backgroundColor = 'skyblue';
        });
    });
    document.querySelector('#calculate').addEventListener('click', () => {
        const expression = result.value;
        const resultValue = eval(expression);
        result.value = resultValue; 
        display.innerHTML = ''; 
    });
    document.querySelector('#clear').addEventListener('click', () => {
        result.value = ''; 
        display.innerHTML = '';
    });