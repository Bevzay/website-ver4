var i = 0;

function html() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 90) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function scss() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 60) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function php() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 50) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function mysql() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 50) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}

function bootstrap() {
    if (i == 0) {
        i = 0;
        var progress = document.getElementById("progressBar");
        var width = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (width >= 90) {
                clearInterval(interval);
                i = 0;
            } else {
                width++;
                progress.style.width = width + '%';
                progress.innerHTML = width + '%';
            }
        }
    }
}