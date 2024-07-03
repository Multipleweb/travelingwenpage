document.getElementById('generateBtn').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if (url) {
        // Validate URL
        try {
            new URL(url);
        } catch (_) {
            alert("Please enter a valid URL.");
            return;
        }

        var qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = '';
        var qrcode = new QRCode(qrcodeContainer, {
            text: url,
            width: 230,
            height: 230
        });

        document.getElementById('downloadPngBtn').style.display = 'block';
        document.getElementById('downloadJpgBtn').style.display = 'block';
    }
});

document.getElementById('downloadPngBtn').addEventListener('click', function() {
    downloadQRCode('image/png', 'qrcodegenerate.png');
});

document.getElementById('downloadJpgBtn').addEventListener('click', function() {
    downloadQRCode('image/jpeg', 'qrcodegenerate.jpg');
});

function downloadQRCode(format, filename) {
    var qrcodeCanvas = document.querySelector('.qrcode canvas');
    if (qrcodeCanvas) {
        var link = document.createElement('a');
        link.href = qrcodeCanvas.toDataURL(format);
        link.download = filename;
        link.click();
    }
}
