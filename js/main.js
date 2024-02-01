$(document).ready(function(){
    let check_aba_lateral = $('main aside').hasClass("colher-aba-lateral");
    
    function moverAbaLateral(){
        if(check_aba_lateral){
            $('.aba-lateral').removeClass('colher-aba-lateral');
            check_aba_lateral = false;
        }
        else {
            $('.aba-lateral').addClass('colher-aba-lateral');
            check_aba_lateral=true;
        }
    }
    
    $('.hamburguer').click(function(){
        moverAbaLateral();
    })
    $(window).scroll(function (){
        $('.aba-lateral').addClass('colher-aba-lateral');
    })
    $('.aba-lateral ul li, .menu-lg ul li').click(function(){
        const secaoProduto = $(this).text().toLowerCase();
        let position = 0;
        
        if(secaoProduto.includes("sobre")){
            position = $("#quem-somos").offset().top;
        }
        if(secaoProduto.includes("buscamos")){
            position = $("#o-q-buscamos").offset().top;
        }
        if(secaoProduto.includes("modelos")){
            position = $("#modelos").offset().top;
        }
        if(secaoProduto.includes("contato")){
            position = $("#contato").offset().top;
        }
        
        $('html,body').animate({scrollTop: position},2000)
        
    });
    $('#tel_user').mask('(00) 00000-0000');

    $('form').validate({
        debug:true,
        rules: {
            name_user: {
                required: true,
            },
            email_user: {
                required: true,
                email:true,
            },
            tel_user: {
                required: true,
            },
        },
        messages: {
            name_user: {
                required: 'Por favor, insira seu nome completo',
            },
            email_user: {
                required: "Por favor, digite seu email",
                email:"Ex: nome@dominio.com"
            },
            tel_user: {
                required: 'Digite um telefone válido!'
            }
        }
    })
    


})