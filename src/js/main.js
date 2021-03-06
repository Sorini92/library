import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action №1</a>
                <a href="#" class="dropdown-item">Action №2</a>
                <a href="#" class="dropdown-item">Action №3</a>
                <a href="#" class="dropdown-item">Action №4</a>
            </div>
        </div>
    `
);
$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'TEXT1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga mollitia nemo placeat optio itaque vero hic, repudiandae maxime quidem necessitatibus, vel odio, quos eius odit ex eligendi recusandae vitae voluptatem'
    },
    btns: {
        count: 2,
        settings: [
            [
                'close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ]
        ]
    }
}));

$('#trigger2').click(() => $('#trigger2').createModal({
    text: {
        title: 'Modal title',
        body: 'TEXT2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga mollitia nemo placeat optio itaque vero hic, repudiandae maxime quidem necessitatibus, vel odio, quos eius odit ex eligendi recusandae vitae voluptatem'
    },
    btns: {
        count: 2,
        settings: [
            [
                'close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ]
        ]
    }
}));

