// 登録されたService Workerをインストール
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered successfully.'))
    .catch(error => console.error('Service Worker registration failed:', error));
}