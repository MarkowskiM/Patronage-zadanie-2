var ScoreUI = function(element, format, startValue) {

    var spanElement = element.querySelector('.counter'),
        upButton = element.querySelector('.up'),
        downButton = element.querySelector('.down'),
		getButton = element.querySelector('.get'),
		inputElement = element.querySelector('.value'),
		setButton = element.querySelector('.set'),
        resetButton = element.querySelector('.reset'),
        removeButton = element.querySelector('.remove')

    var counter = new ScoreCounter(spanElement, format, startValue);

	upButton.addEventListener('click', function() {
        counter.up();
	});

    downButton.addEventListener('click', function() {
        counter.down();
    });

    getButton.addEventListener('click', function() {
        counter.value();
    });

	setButton.addEventListener('click', function() {
        counter.value(inputElement.value)
	});

    resetButton.addEventListener('click', function() {
        counter.reset(element);
    });

    removeButton.addEventListener('click', function() {
        counter.remove(element);
    });
};

