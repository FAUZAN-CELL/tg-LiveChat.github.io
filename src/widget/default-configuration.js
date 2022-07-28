
export const defaultConfiguration = {
    titleClosed: 'Live Chat!',
    titleOpen: 'Telegram',
    closedStyle: 'button', // button atau chat
    closedChatAvatarUrl: '', // hanya digunakan jika closedStyle diatur ke 'chat'
    cookieExpiration: 1, // dalam hari. Setelah dibuka, judul obrolan tertup akan ditampilkan sebagai tombol (ketika closedStyle diatur ke 'chat')
    introMessage: 'Halo! Bagaimana kami dapat membantu Anda?',
    autoResponse: 'Mencari admin pertama yang tersedia (Mungkin perlu satu menit)',
    autoNoResponse: 'Tampaknya tidak ada yang tersedia untuk menjawab sekarang juga. Tolong beri tahu kami bagaimana kami dapat ' +
    'menghubungi anda, dan kami akan menghubungi Anda sesegera mungkin.',
    placeholderText: 'Kirim pesan...',
    displayMessageTime: true,
    mainColor: '#1f8ceb',
    alwaysUseFloatingButton: false,
    desktopHeight: 450,
    desktopWidth: 370
};
