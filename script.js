document.addEventListener('DOMContentLoaded', () => {
    const clearStorageButton = document.getElementById('clear-storage');
    const addButton = document.getElementById('add-button');
    const fileInput = document.getElementById('file-input');
    const gridContainer = document.getElementById('grid-container');

    // 로컬 스토리지 초기화
    clearStorageButton.addEventListener('click', () => {
        localStorage.clear();
        alert('로컬 스토리지가 초기화되었습니다.'); 
    });

    // 버튼 클릭 시 파일 선택
    addButton.addEventListener('click', () => {
        fileInput.click(); // 파일 입력 클릭
    });

    // 파일 업로드
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // 이미지 src를 로컬 스토리지에 저장
                const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
                uploadedImages.push(e.target.result);
                localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));

                // 그리드에 새로운 이미지 추가
                createGridItem(e.target.result);
            };
            reader.readAsDataURL(file); // 파일을 Data URL로 읽기
        }
    });

    // 그리드 아이템 생성 함수
    function createGridItem(imageSrc) {
        const newGridItem = document.createElement('div');
        newGridItem.className = 'grid-item';

        // 이미지 생성
        const newImage = document.createElement('img');
        newImage.src = imageSrc;
        newImage.alt = 'Uploaded Image';

        // 새로운 그리드 아이템에 이미지 추가
        newGridItem.appendChild(newImage);

        // 그리드 컨테이너에 추가
        gridContainer.appendChild(newGridItem);
    }

    // 페이지 로드 시 이미지 불러오기
    function loadImages() {
        const images = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        images.forEach(imageSrc => {
            createGridItem(imageSrc);
        });
    }

    loadImages(); // 페이지 로드 시 기존 이미지 불러오기
});
