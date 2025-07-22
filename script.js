document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = modal.querySelector('.modal-content');
    const closeModalButton = modal.querySelector('.modal-close-button');

    if (modal && modalImg && closeModalButton && galleryItems.length > 0) {
        const openModal = (src) => {
            modalImg.src = src;
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.dataset.src;
                if (imgSrc) openModal(imgSrc);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        closeModalButton.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});