// 인증 관련 상태
let isLoggedIn = false;
let userType = 'general'; // general, designer, business

// 페이지 표시 함수 (auth.js에서 필요한 경우)
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
    }
}

// 회원가입 폼 표시
function showSignupForm(type) {
    const signupForm = document.getElementById('signupForm');
    let formHTML = '';
    
    switch(type) {
        case 'general':
            formHTML = `
                <div class="user-type-selection">
                    <label class="section-label">업무 유형 (중복 선택 가능)</label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="design">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">디자인</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="construction">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">시공업체</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="technician">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">기술자</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="transport">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">운송</span>
                        </label>
                    </div>
                </div>
                <div class="social-login">
                    <button class="btn btn-social google" onclick="handleSocialLogin('google')">
                        <i class="fab fa-google"></i>
                        구글로 회원가입
                    </button>
                    <button class="btn btn-social kakao" onclick="handleSocialLogin('kakao')">
                        <i class="fas fa-comment"></i>
                        카카오로 회원가입
                    </button>
                    <button class="btn btn-social naver" onclick="handleSocialLogin('naver')">
                        <i class="fab fa-naver"></i>
                        네이버로 회원가입
                    </button>
                </div>
            `;
            break;
        case 'designer':
            formHTML = `
                <div class="user-type-selection">
                    <label class="section-label">업무 유형 (중복 선택 가능)</label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="design" checked>
                            <span class="checkmark"></span>
                            <span class="checkbox-label">디자인</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="construction">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">시공업체</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="technician">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">기술자</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="transport">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">운송</span>
                        </label>
                    </div>
                </div>
                <div class="social-login">
                    <button class="btn btn-social google" onclick="handleSocialLogin('google')">
                        <i class="fab fa-google"></i>
                        구글로 회원가입
                    </button>
                    <button class="btn btn-social kakao" onclick="handleSocialLogin('kakao')">
                        <i class="fas fa-comment"></i>
                        카카오로 회원가입
                    </button>
                    <button class="btn btn-social naver" onclick="handleSocialLogin('naver')">
                        <i class="fab fa-naver"></i>
                        네이버로 회원가입
                    </button>
                </div>
                <div class="form-group">
                    <label>포트폴리오 URL</label>
                    <input type="url" placeholder="포트폴리오 URL을 입력하세요">
                </div>
                <div class="form-group">
                    <label>전문 분야</label>
                    <select>
                        <option>3D 모델링</option>
                        <option>인테리어 디자인</option>
                        <option>제품 디자인</option>
                    </select>
                </div>
            `;
            break;
        case 'business':
            formHTML = `
                <div class="user-type-selection">
                    <label class="section-label">업무 유형 (중복 선택 가능)</label>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="design">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">디자인</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="construction" checked>
                            <span class="checkmark"></span>
                            <span class="checkbox-label">시공업체</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="technician">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">기술자</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" name="userTypes" value="transport">
                            <span class="checkmark"></span>
                            <span class="checkbox-label">운송</span>
                        </label>
                    </div>
                </div>
                <div class="social-login">
                    <button class="btn btn-social google" onclick="handleSocialLogin('google')">
                        <i class="fab fa-google"></i>
                        구글로 회원가입
                    </button>
                    <button class="btn btn-social kakao" onclick="handleSocialLogin('kakao')">
                        <i class="fas fa-comment"></i>
                        카카오로 회원가입
                    </button>
                    <button class="btn btn-social naver" onclick="handleSocialLogin('naver')">
                        <i class="fab fa-naver"></i>
                        네이버로 회원가입
                    </button>
                </div>
                <div class="form-group">
                    <label>사업자 등록번호</label>
                    <input type="text" placeholder="사업자 등록번호를 입력하세요">
                </div>
                <div class="form-group">
                    <label>업체명</label>
                    <input type="text" placeholder="업체명을 입력하세요">
                </div>
                <div class="form-group">
                    <label>업체 주소</label>
                    <input type="text" placeholder="업체 주소를 입력하세요">
                </div>
            `;
            break;
    }
    
    signupForm.innerHTML = formHTML;
    signupForm.style.display = 'block';
    
    // 현재 선택된 회원 유형 표시
    userType = type;
    updateSignupButtons(type);
}

// 회원가입 버튼 상태 업데이트
function updateSignupButtons(selectedType) {
    const buttons = document.querySelectorAll('.signup-options .btn');
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
    });
    
    const selectedButton = document.querySelector(`[onclick="showSignupForm('${selectedType}')"]`);
    if (selectedButton) {
        selectedButton.classList.remove('btn-outline');
        selectedButton.classList.add('btn-primary');
    }
}

// 소셜 로그인 처리
function handleSocialLogin(provider) {
    console.log(`${provider} 로그인 시도`);
    
    // 실제 소셜 로그인 구현 예정
    switch(provider) {
        case 'google':
            // Google OAuth 구현
            showNotification('구글 로그인 기능 준비 중입니다.', 'info');
            break;
        case 'kakao':
            // Kakao OAuth 구현
            showNotification('카카오 로그인 기능 준비 중입니다.', 'info');
            break;
        case 'naver':
            // Naver OAuth 구현
            showNotification('네이버 로그인 기능 준비 중입니다.', 'info');
            break;
    }
    
    // 임시 로그인 처리 (개발 중)
    simulateLogin(provider);
}

// 임시 로그인 시뮬레이션 (개발용)
function simulateLogin(provider) {
    setTimeout(() => {
        isLoggedIn = true;
        updateAuthUI();
        showNotification(`${provider} 로그인이 완료되었습니다.`, 'success');
        
        // 메인 페이지로 리다이렉트
        if (typeof window !== 'undefined') {
            window.location.href = 'index.html';
        }
    }, 1000);
}

// 로그인 처리 (일반 로그인)
function login(email, password) {
    // 실제 로그인 API 호출 예정
    console.log('로그인 시도:', email);
    
    // 임시 로그인 처리
    isLoggedIn = true;
    updateAuthUI();
    showNotification('로그인이 완료되었습니다.', 'success');
    
    // 메인 페이지로 리다이렉트
    if (typeof window !== 'undefined') {
        window.location.href = 'index.html';
    }
}

// 로그아웃 처리
function logout() {
    isLoggedIn = false;
    userType = 'general';
    updateAuthUI();
    showNotification('로그아웃되었습니다.', 'info');
    
    // 세션 정리
    clearUserSession();
    
    // 메인 페이지로 리다이렉트
    if (typeof showPage === 'function') {
        showPage('main');
    } else if (typeof window !== 'undefined') {
        window.location.href = 'index.html';
    }
}

// 인증 UI 업데이트
function updateAuthUI() {
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    
    if (authButtons && userInfo) {
        if (isLoggedIn) {
            authButtons.style.display = 'none';
            userInfo.style.display = 'flex';
        } else {
            authButtons.style.display = 'flex';
            userInfo.style.display = 'none';
        }
    }
}

// 사용자 세션 정리
function clearUserSession() {
    // 로컬 스토리지 정리
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userType');
        localStorage.removeItem('userInfo');
    }
    
    // 세션 스토리지 정리
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.clear();
    }
}

// 회원가입 처리
function signup(formData) {
    console.log('회원가입 시도:', formData);
    
    // 선택된 업무 유형 추가
    const selectedUserTypes = getSelectedUserTypes();
    formData.userTypes = selectedUserTypes;
    
    console.log('선택된 업무 유형:', selectedUserTypes);
    
    // 유효성 검사
    if (!validateSignupForm(formData)) {
        return;
    }
    
    // 실제 회원가입 API 호출 예정
    // 임시 처리
    showNotification(`회원가입이 완료되었습니다. 업무 유형: ${selectedUserTypes.join(', ')}`, 'success');
    
    setTimeout(() => {
        if (typeof window !== 'undefined') {
            window.location.href = 'login.html';
        }
    }, 2000);
}

// 회원가입 폼 유효성 검사
function validateSignupForm(formData) {
    // 업무 유형 선택 확인
    const selectedUserTypes = getSelectedUserTypes();
    if (selectedUserTypes.length === 0) {
        showNotification('최소 하나의 업무 유형을 선택해주세요.', 'error');
        return false;
    }
    
    if (!formData.email) {
        showNotification('이메일을 입력해주세요.', 'error');
        return false;
    }
    
    if (!formData.password) {
        showNotification('비밀번호를 입력해주세요.', 'error');
        return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
        showNotification('비밀번호가 일치하지 않습니다.', 'error');
        return false;
    }
    
    // 회원 유형별 추가 검사
    if (userType === 'designer' && !formData.portfolio) {
        showNotification('포트폴리오 URL을 입력해주세요.', 'error');
        return false;
    }
    
    if (userType === 'business' && !formData.businessNumber) {
        showNotification('사업자 등록번호를 입력해주세요.', 'error');
        return false;
    }
    
    return true;
}

// 선택된 업무 유형 가져오기
function getSelectedUserTypes() {
    const checkboxes = document.querySelectorAll('input[name="userTypes"]:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// 비밀번호 재설정
function resetPassword(email) {
    console.log('비밀번호 재설정 요청:', email);
    
    // 실제 비밀번호 재설정 API 호출 예정
    showNotification('비밀번호 재설정 링크가 이메일로 전송되었습니다.', 'info');
}

// 로그인 상태 확인
function checkAuthStatus() {
    // 실제로는 서버에서 토큰 유효성 검사
    const token = localStorage.getItem('userToken');
    if (token) {
        isLoggedIn = true;
        updateAuthUI();
    }
}

// 알림 기능 (auth.js용)
function showNotification(message, type = 'info') {
    // 간단한 알림 표시
    console.log(`알림 [${type}]:`, message);
    
    // 실제 알림 UI 구현 예정
    if (typeof alert !== 'undefined') {
        alert(message);
    }
}

// 페이지 로드 시 인증 상태 확인
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        checkAuthStatus();
        
        // 로그인 폼 이벤트 리스너 (login.html용)
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                login(email, password);
            });
        }
        
        // 회원가입 폼 이벤트 리스너 (signup.html용)
        const signupFormElement = document.getElementById('signupForm');
        if (signupFormElement) {
            signupFormElement.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(this);
                const data = Object.fromEntries(formData);
                signup(data);
            });
        }
    });
}

// 모듈 내보내기 (필요한 경우)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        login,
        logout,
        signup,
        showSignupForm,
        handleSocialLogin,
        checkAuthStatus,
        isLoggedIn,
        userType
    };
} 