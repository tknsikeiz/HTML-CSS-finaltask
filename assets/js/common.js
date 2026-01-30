/* ========================================
   共通JavaScript - PetLife
   ======================================== */

// ========================================
// ナビゲーション
// ========================================

/**
 * 現在のページに基づいてナビゲーションアクティブ状態を設定
 */
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ========================================
// ユーティリティ関数
// ========================================

/**
 * URL にクエリパラメータを追加
 */
function addQueryParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.location.href = url.toString();
}

/**
 * クエリパラメータを取得
 */
function getQueryParam(param) {
    const url = new URL(window.location);
    return url.searchParams.get(param);
}

/**
 * トースト通知を表示
 */
function showToast(message, type = 'success') {
    const toastHTML = `
        <div class="toast-custom" role="alert">
            <div class="toast-header">
                <strong class="me-auto">${type === 'success' ? 'success' : 'info'}</strong>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;

    const container = document.querySelector('.toast-container') || document.createElement('div');
    if (!container.classList.contains('toast-container')) {
        container.classList.add('toast-container');
        document.body.appendChild(container);
    }

    const toastElement = document.createElement('div');
    toastElement.innerHTML = toastHTML;
    container.appendChild(toastElement);

    // 3秒後に削除
    setTimeout(() => {
        toastElement.remove();
    }, 3000);
}

/**
 * フォーム検証
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;

    const inputs = form.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    return isValid;
}

// ========================================
// スクロール関連
// ========================================

/**
 * 滑らかなスクロール
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========================================
// ページトップボタン
// ========================================

/**
 * ページトップへ戻るボタンの表示/非表示
 */
window.addEventListener('scroll', function () {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

/**
 * ページトップへスクロール
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// ローカルストレージ操作
// ========================================

/**
 * お気に入り項目を保存
 */
function saveFavorite(petId) {
    let favorites = JSON.parse(localStorage.getItem('petFavorites')) || [];
    if (!favorites.includes(petId)) {
        favorites.push(petId);
        localStorage.setItem('petFavorites', JSON.stringify(favorites));
        return true;
    }
    return false;
}

/**
 * お気に入り項目を削除
 */
function removeFavorite(petId) {
    let favorites = JSON.parse(localStorage.getItem('petFavorites')) || [];
    favorites = favorites.filter(id => id !== petId);
    localStorage.setItem('petFavorites', JSON.stringify(favorites));
}

/**
 * お気に入り項目を取得
 */
function getFavorites() {
    return JSON.parse(localStorage.getItem('petFavorites')) || [];
}

// ========================================
// アニメーション
// ========================================

/**
 * 要素が画面に入った時のアニメーション
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card-base, .pet-card, .feature-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// 応答検証メッセージ
// ========================================

/**
 * エラーメッセージを表示
 */
function showError(message) {
    showToast(message, 'error');
}

/**
 * 成功メッセージを表示
 */
function showSuccess(message) {
    showToast(message, 'success');
}
