// scripts.js

// 사용자 지정 로딩 시간 (밀리초 단위)
const loadingTime = 3000; // 예를 들어, 3초

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');

    // 로딩 화면을 숨기기 전에 시간을 설정
    setTimeout(() => {
        // 로딩 화면 숨기기
        loadingScreen.classList.add('hidden');

        // 페이지 리디렉션
        window.location.href = 'HOME.html'; // 리디렉션할 페이지
    }, loadingTime); // 사용자 지정 로딩 시간
});

function updateProgress(percentage){
    document.getElementById('progress').innerText = percentage + '%';
}


let progress = 0;
const interval = setInterval(() => {
    progress += 1;
    updateProgress(progress);
    if (progress >= 100) {
        clearInterval(interval);
        // 페이지를 메인 페이지로 리디렉션
        window.location.href = 'index.html'; // 실제 페이지의 URL
    }
}, 30); 