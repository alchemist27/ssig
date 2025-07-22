// 페이지 시스템
let currentPage = 'main';

// 페이지 표시 함수
function showPage(pageId) {
    // 현재 활성 페이지 숨기기
    const currentPageElement = document.querySelector('.page.active');
    if (currentPageElement) {
        currentPageElement.classList.remove('active');
    }
    
    // 새 페이지 표시
    const newPageElement = document.getElementById(pageId);
    if (newPageElement) {
        newPageElement.classList.add('active');
        currentPage = pageId;
    }
    
    // 모바일 메뉴 닫기
    closeMobileMenu();
    
    // 메인 페이지로 돌아올 때 애니메이션 재초기화
    if (pageId === 'main') {
        setTimeout(() => {
            // 통계 숫자 초기화
            document.querySelectorAll('.stat-count').forEach(el => {
                el.textContent = '0';
            });
            // 애니메이션 재시작
            initScrollAnimations();
        }, 100);
    }
    
    // 페이지별 특별 처리
    switch(pageId) {
        case 'login':
            // 로그인 페이지로 리다이렉트 (이미 login.html에 있는 경우 제외)
            if (!window.location.pathname.includes('login.html')) {
                window.location.href = 'login.html';
            }
            return;
        case 'signup':
            // 회원가입 페이지로 리다이렉트 (이미 signup.html에 있는 경우 제외)
            if (!window.location.pathname.includes('signup.html')) {
                window.location.href = 'signup.html';
            }
            return;
        case 'admin':
        case 'mypage':
        case 'messages':
            // 로그인 필요 페이지 - 외부 auth.js의 isLoggedIn 확인
            if (typeof isLoggedIn !== 'undefined' && !isLoggedIn) {
                window.location.href = 'login.html';
                return;
            }
            break;
    }
}

// 모바일 메뉴 토글
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    mobileNav.classList.toggle('active');
    toggleButton.classList.toggle('active');
    
    // 스크롤 방지/허용
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// 모바일 메뉴 닫기
function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    mobileNav.classList.remove('active');
    toggleButton.classList.remove('active');
    document.body.style.overflow = '';
}



// 메시지 탭 전환
function showMessageTab(tabName) {
    // 모든 탭 비활성화
    const tabs = document.querySelectorAll('.messages-sidebar .tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // 선택된 탭 활성화
    const selectedTab = document.querySelector(`[onclick="showMessageTab('${tabName}')"]`);
    const selectedContent = document.getElementById(tabName + 'Tab');
    
    if (selectedTab) selectedTab.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
}

// 관리자 탭 전환
function showAdminTab(tabName) {
    // 모든 관리자 메뉴 항목 비활성화
    const menuItems = document.querySelectorAll('.admin-menu-item');
    const tabContents = document.querySelectorAll('.admin-tab-content');
    
    menuItems.forEach(item => item.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // 선택된 메뉴 항목 활성화
    const selectedMenuItem = document.querySelector(`[onclick="showAdminTab('${tabName}')"]`);
    const selectedContent = document.getElementById('admin' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
    
    if (selectedMenuItem) selectedMenuItem.classList.add('active');
    if (selectedContent) selectedContent.classList.add('active');
}

// 검색 기능
function searchProducts(query) {
    console.log('상품 검색:', query);
    // 실제 검색 로직 구현 예정
}

function searchMap(query) {
    console.log('지도 검색:', query);
    // 실제 지도 검색 로직 구현 예정
}

// 정렬 기능
function sortProducts(sortBy) {
    console.log('상품 정렬:', sortBy);
    // 실제 정렬 로직 구현 예정
}

// 필터 기능
function filterModels(category) {
    console.log('모델 필터:', category);
    // 실제 필터 로직 구현 예정
}

// 상품 등록
function registerProduct() {
    if (typeof isLoggedIn !== 'undefined' && !isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    console.log('상품 등록');
    // 실제 상품 등록 로직 구현 예정
}

// 프로젝트 업로드
function uploadProject() {
    if (typeof isLoggedIn !== 'undefined' && !isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    console.log('프로젝트 업로드');
    // 실제 프로젝트 업로드 로직 구현 예정
}

// 모델링 편집 기능
function addModelingRow() {
    console.log('모델링 행 추가');
    // 실제 행 추가 로직 구현 예정
}

function removeModelingRow() {
    console.log('모델링 행 삭제');
    // 실제 행 삭제 로직 구현 예정
}

function copyModelingRow() {
    console.log('모델링 행 복사');
    // 실제 행 복사 로직 구현 예정
}

function exportModeling() {
    console.log('모델링 내보내기');
    // 관리자 권한 확인 후 내보내기
}

// 친구 관련 기능
function addFriend(userId) {
    console.log('친구 추가:', userId);
    // 실제 친구 추가 로직 구현 예정
}

function sendMessage(userId) {
    console.log('쪽지 보내기:', userId);
    // 실제 쪽지 보내기 로직 구현 예정
}

function subscribe(userId) {
    console.log('구독하기:', userId);
    // 실제 구독 로직 구현 예정
}

// 스와이프 기능 (모바일)
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // 오른쪽 스와이프 - 친구목록 표시
            showFriendsList();
        } else {
            // 왼쪽 스와이프 - 메인 페이지
            showPage('main');
        }
    }
}

function showFriendsList() {
    // 모바일에서 친구목록 표시
    const friendsSection = document.querySelector('.friends-section');
    if (friendsSection) {
        friendsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 알림 기능
function showNotification(message, type = 'info') {
    // 알림 표시 로직 구현 예정
    console.log(`알림 [${type}]:`, message);
}

// 컴포넌트 로드 함수
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// 카운팅 애니메이션 함수
function animateCounter(element, target, duration = 2000) {
    const countElement = element.querySelector('.stat-count');
    if (!countElement) return;
    
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // 숫자 포맷팅 (숫자 부분만)
        let displayValue = Math.floor(current);
        if (target >= 1000) {
            displayValue = displayValue.toLocaleString('ko-KR');
        }
        
        // 숫자 부분만 업데이트 (+ 기호는 고정)
        countElement.textContent = displayValue;
    }, 16);
}

// Intersection Observer를 사용한 스크롤 애니메이션
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // 통계 숫자 애니메이션
                if (element.classList.contains('stat-number')) {
                    const targetNumber = parseInt(element.dataset.number);
                    animateCounter(element, targetNumber, 2000);
                    
                    observer.unobserve(element);
                }
                
                // 모바일 feature-card 애니메이션
                if (element.classList.contains('feature-card') && window.innerWidth <= 768) {
                    element.classList.add('animate-in');
                    observer.unobserve(element);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 통계 숫자 요소들 관찰
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
    
    // 모바일에서 feature-card 요소들 관찰
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.feature-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// 헤더 스크롤 효과
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const scrollY = window.scrollY;
    
    // 헤더 스티키 위치 강제 설정 (CSS가 덮어씌워진 경우 대비)
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.zIndex = '1001';
    
    if (scrollY > 10) {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

// 메인 페이지 초기화 함수
async function initMainPage() {
    // 헤더 로딩 후 로그인 버튼 이벤트 수정
    setTimeout(() => {
        const loginButtons = document.querySelectorAll('a[href="login.html"]');
        loginButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // 기본 동작 유지 - 새 페이지로 이동
                // 추가적인 JavaScript 간섭 방지
                e.stopPropagation();
            });
        });
    }, 100);
    
    // 기본 페이지 표시
    showPage('main');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', async function() {
    // 모든 페이지에서 헤더/푸터 로드
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (headerContainer && footerContainer) {
        // 공통 컴포넌트 로드
        await loadComponent('header-container', 'components/header.html');
        await loadComponent('footer-container', 'components/footer.html');
        
        // 헤더 스티키 설정 강화
        setTimeout(() => {
            const header = document.querySelector('.header');
            if (header) {
                header.style.position = 'sticky';
                header.style.top = '0';
                header.style.zIndex = '1001';
                header.style.width = '100%';
            }
        }, 50);
        
        // 헤더 스크롤 효과 이벤트 리스너 추가
        window.addEventListener('scroll', handleHeaderScroll);
        
        // 초기 헤더 상태 설정
        handleHeaderScroll();
        
        // 푸터 링크 수정 (SPA가 아닌 페이지에서)
        if (!window.location.pathname.includes('index.html') && 
            window.location.pathname !== '/' && 
            !window.location.pathname.endsWith('/SSG/')) {
            setTimeout(() => {
                const footerLinks = document.querySelectorAll('.footer-links a[onclick]');
                footerLinks.forEach(link => {
                    const onclickValue = link.getAttribute('onclick');
                    if (onclickValue) {
                        // showPage('product') -> product.html
                        const pageName = onclickValue.match(/showPage\('(.+?)'\)/);
                        if (pageName && pageName[1]) {
                            let fileName = pageName[1];
                            // 특별한 경우 처리
                            if (fileName === '3d') fileName = '3d-library';
                            if (fileName === 'ai') fileName = 'ai-test';
                            
                            link.href = `${fileName}.html`;
                            link.removeAttribute('onclick');
                        }
                    }
                });
            }, 100);
        }
    }
    
    // index.html에서만 메인 페이지 초기화 실행
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/SSG/')) {
        await initMainPage();
    }
    
    // 스크롤 애니메이션 초기화
    setTimeout(() => {
        initScrollAnimations();
    }, 500);
    
    // 터치 이벤트 리스너 추가 (모바일)
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchend', handleTouchEnd, false);
    }
    
    // 검색 입력 이벤트 리스너
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value;
                if (currentPage === 'product') {
                    searchProducts(query);
                } else if (currentPage === 'map') {
                    searchMap(query);
                }
            }
        });
    });
    
    // 정렬 선택 이벤트 리스너
    const sortSelects = document.querySelectorAll('.sort-select');
    sortSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (currentPage === 'product') {
                sortProducts(this.value);
            }
        });
    });
    
    // 필터 선택 이벤트 리스너
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (currentPage === '3d') {
                filterModels(this.value);
            }
        });
    });
    
    // 모바일 메뉴 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // 인증 상태 업데이트 (auth.js가 로드된 경우에만)
    if (typeof updateAuthUI === 'function') {
        updateAuthUI();
    }
    
                // 헤더 스티키 설정 강화
            setTimeout(() => {
                const header = document.querySelector('.header');
                if (header) {
                    header.style.position = 'sticky';
                    header.style.top = '0';
                    header.style.zIndex = '1001';
                    header.style.width = '100%';
                }
            }, 50);
            
            // 헤더 스크롤 효과 이벤트 리스너 추가
            window.addEventListener('scroll', handleHeaderScroll);
            
            // 초기 헤더 상태 설정
            handleHeaderScroll();
});

// 윈도우 리사이즈 이벤트
window.addEventListener('resize', function() {
    // 모바일에서 데스크톱으로 전환 시 모바일 메뉴 닫기
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// 브라우저 뒤로가기 지원
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.page) {
        showPage(e.state.page);
    }
});

// 페이지 상태 히스토리에 추가
function addToHistory(pageId) {
    history.pushState({ page: pageId }, '', `#${pageId}`);
}

// 유틸리티 함수들
function formatPrice(price) {
    return price.toLocaleString('ko-KR') + '원';
}

function formatDistance(distance) {
    if (distance < 1000) {
        return distance + 'm';
    } else {
        return (distance / 1000).toFixed(1) + 'km';
    }
}

function formatDate(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (minutes < 60) {
        return minutes + '분 전';
    } else if (hours < 24) {
        return hours + '시간 전';
    } else {
        return days + '일 전';
    }
}

// 이미지 로딩 에러 처리
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjM0QzRDNEIi8+CjxwYXRoIGQ9Ik0xMDAgMTQwQzExNi41NjkgMTQwIDEzMCAxMjYuNTY5IDEzMCAxMTBDMTMwIDkzLjQzMTUgMTE2LjU2OSA4MCAxMDAgODBDODMuNDMxNSA4MCA3MCA5My40MzE1IDcwIDExMEM3MCAxMjYuNTY5IDgzLjQzMTUgMTQwIDEwMCAxNDBaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xNDAgMTYwSDYwVjE0MEg2MFYxNjBIMTQwWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K';
} 