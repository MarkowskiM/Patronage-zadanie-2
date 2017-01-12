var ScoreCounter = function(element, format, startValue) {
    var self = this;
    init();

    // API
    return {
        up: up,
        down: down,
        value: value,
        reset: reset,
        remove: remove
    }

    // Initialize counters
    function init() {
        self.element = element;
        self.format = format;
        self.startValue = startValue;
        setStartValue();
    }

    // Public functions
    function up() {
        var incrementedValue = parseInt(self.element.innerHTML) + 1;
        if(validateNumber(incrementedValue)) {
            self.element.innerHTML = zerosPadding(incrementedValue, self.format);   
        }
    }

    function down() {
        var decrementedValue = parseInt(self.element.innerHTML) - 1;
        if(validateNumber(decrementedValue)) {
            self.element.innerHTML = zerosPadding(decrementedValue, self.format);   
        }
    }

    function value(settingValue) {
        if(settingValue !== undefined) {
            if(validateNumber(settingValue)) {
                self.element.innerHTML = zerosPadding(settingValue, self.format);
            }
        } else alert('Counter score is: ' + self.element.innerHTML);
    }

    function reset() {
        var resetedValue = 0;
        self.element.innerHTML = zerosPadding(resetedValue, self.format);
    }

    function remove(elem) {
        elem.parentNode.removeChild(elem);
    }

    // Private functions
    function setStartValue() {
        var initialCounterValue;
        if(validateNumber(self.startValue)) {
            initialCounterValue = zerosPadding(self.startValue, self.format);
            self.element.innerHTML = initialCounterValue;
        } else {  // if initial value is out of format range, fill counter with zeros
            initialCounterValue = zerosPadding(0, self.format);
            self.element.innerHTML = initialCounterValue;   
        }
    }

    function zerosPadding(num, size) {
        var newString = num+""; 
        while (newString.length < size) newString = "0" + newString;
        return newString;
    }

    function lengthOfNumber(number) {
        return number.toString().length;
    }

    function validateNumber(number) {

        var numberLength = lengthOfNumber(number),
            result = true;
        if(numberLength > self.format) result = false; // disable the button when trying to get out of range
        else if(number < 0) result = false;
        
        return result;
    }

    



};
