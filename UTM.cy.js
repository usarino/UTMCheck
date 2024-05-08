describe('ПРОВЕРКА УТМ', function () {

    it('Автотест на проверку УТМ 121 8080 ИП Петраленков', function () {
        cy.visit('http://192.168.0.121:8080/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8081 ИП Барыбкина', function () {
        cy.visit('http://192.168.0.121:8081/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8082 ИП Данкина', function () {
        cy.visit('http://192.168.0.121:8082/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8083 ИП Шкуматова', function () {
        cy.visit('http://192.168.0.121:8083/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8084 ИП Соломин', function () {
        cy.visit('http://192.168.0.121:8084/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8085 ИП Сысоев', function () {
        cy.visit('http://192.168.0.121:8085/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 121 8086 ИП Мищенкова', function () {
        cy.visit('http://192.168.0.121:8086/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 122 8080 ООО Браво', function () {
        cy.visit('http://192.168.0.122:8080/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 122 8081 ИП Гришкина', function () {
        cy.visit('http://192.168.0.122:8081/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 122 8084 ИП Великдань О', function () {
        cy.visit('http://192.168.0.122:8084/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 122 8086 ИП Николашин', function () {
        cy.visit('http://192.168.0.122:8086/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 123 8080 ИП Новичкова', function () {
        cy.visit('http://192.168.0.123:8080/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 123 8081 ИП Павлова', function () {
        cy.visit('http://192.168.0.123:8081/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 123 8082 ИП Гусев', function () {
        cy.visit('http://192.168.0.123:8082/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 123 8083 ИП Амелин', function () {
        cy.visit('http://192.168.0.123:8083/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 123 8085 ИП Душкин', function () {
        cy.visit('http://192.168.0.123:8085/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 123 8086 ИП Тищенко', function () {
        cy.visit('http://192.168.0.123:8086/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
        
    })
    it('Автотест на проверку УТМ 124 8080 ИП Рязанова', function () {
        cy.visit('http://192.168.0.124:8080/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8081 ИП Козлов', function () {
        cy.visit('http://192.168.0.124:8081/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8082 ИП Хачатрян', function () {
        cy.visit('http://192.168.0.124:8082/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8083 ИП Зозуля', function () {
        cy.visit('http://192.168.0.124:8083/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8084 ИП Чехонадских', function () {
        cy.visit('http://192.168.0.124:8084/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8085 ИП Димитров', function () {
        cy.visit('http://192.168.0.124:8085/app/services/rsa'); //открыть УТМ
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 124 8086 ИП Ручкин', function () {
        cy.visit('http://192.168.0.124:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8080 ИП Великдань', function () {
        cy.visit('http://192.168.0.125:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8081 ИП Сахарчук', function () {
        cy.visit('http://192.168.0.125:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8082 ИП Бойков', function () {
        cy.visit('http://192.168.0.125:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8083 ИП Иванов', function () {
        cy.visit('http://192.168.0.125:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8084 ИП Холматов', function () {
        cy.visit('http://192.168.0.125:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 125 8085 ИП Скакун', function () {
        cy.visit('http://192.168.0.125:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8080 ИП Корчаченко', function () {
        cy.visit('http://192.168.0.126:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8081 ИП Матряшина', function () {
        cy.visit('http://192.168.0.126:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8082 ИП Ксенофонтова', function () {
        cy.visit('http://192.168.0.126:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8083 ИП Сафарова', function () {
        cy.visit('http://192.168.0.126:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8084 ИП Пенин', function () {
        cy.visit('http://192.168.0.126:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8085 ИП Бритарев', function () {
        cy.visit('http://192.168.0.126:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 126 8086 ИП Колбасов', function () {
        cy.visit('http://192.168.0.126:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8080 ИП Мардоян', function () {
        cy.visit('http://192.168.0.127:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8081 ИП Багирян', function () {
        cy.visit('http://192.168.0.127:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8082 ИП Курбанова', function () {
        cy.visit('http://192.168.0.127:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8083 ИП Круглов', function () {
        cy.visit('http://192.168.0.127:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8084 ИП Лукманова', function () {
        cy.visit('http://192.168.0.127:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8085 ИП Погосян', function () {
        cy.visit('http://192.168.0.127:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 127 8086 ИП Алешина', function () {
        cy.visit('http://192.168.0.127:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8080 ИП Артемьев', function () {
        cy.visit('http://192.168.0.128:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8081 ИП Гришин', function () {
        cy.visit('http://192.168.0.128:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8082 ИП Мейманкулыев', function () {
        cy.visit('http://192.168.0.128:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8083 ИП Петрушин', function () {
        cy.visit('http://192.168.0.128:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8084 ИП Семина', function () {
        cy.visit('http://192.168.0.128:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8085 ИП Солодкова', function () {
        cy.visit('http://192.168.0.128:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 128 8086 ИП Шведова', function () {
        cy.visit('http://192.168.0.128:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8080 ИП Андриянова', function () {
        cy.visit('http://192.168.0.129:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8081 ИП Лавриненко', function () {
        cy.visit('http://192.168.0.129:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8082 ИП Ломаченкова', function () {
        cy.visit('http://192.168.0.129:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8083 ИП Батишева', function () {
        cy.visit('http://192.168.0.129:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8084 ИП Сергеева', function () {
        cy.visit('http://192.168.0.129:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8085 ИП Хачатрян Аксенова', function () {
        cy.visit('http://192.168.0.129:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 129 8086 ИП Давтян', function () {
        cy.visit('http://192.168.0.129:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8080 ИП Волкова Моск', function () {
        cy.visit('http://192.168.0.130:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8081 ИП Волкова Осн', function () {
        cy.visit('http://192.168.0.130:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8082 ИП Волкова Пролетарка', function () {
        cy.visit('http://192.168.0.130:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8083 ИП Магтагян', function () {
        cy.visit('http://192.168.0.130:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8084 ИП Монахова', function () {
        cy.visit('http://192.168.0.130:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8085 ИП Савицкая', function () {
        cy.visit('http://192.168.0.130:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 130 8086 ИП Тадевосян', function () {
        cy.visit('http://192.168.0.130:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8080 ИП Агафонов', function () {
        cy.visit('http://192.168.0.131:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8081 ИП Велиеева', function () {
        cy.visit('http://192.168.0.131:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8082 ИП Гзогян', function () {
        cy.visit('http://192.168.0.131:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8083 ИП Крепак', function () {
        cy.visit('http://192.168.0.131:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8084 ИП Мазенкова', function () {
        cy.visit('http://192.168.0.131:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8085 ИП Мовсисян', function () {
        cy.visit('http://192.168.0.131:8085/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 131 8086 ИП Сысой', function () {
        cy.visit('http://192.168.0.131:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8080 ИП Алексеев', function () {
        cy.visit('http://192.168.0.132:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8081 ИП Горецкая', function () {
        cy.visit('http://192.168.0.132:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8082 ИП Исаева', function () {
        cy.visit('http://192.168.0.132:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8083 ИП Клещенко', function () {
        cy.visit('http://192.168.0.132:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8084 ИП Курачева', function () {
        cy.visit('http://192.168.0.132:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 132 8086 ИП Челушкина', function () {
        cy.visit('http://192.168.0.132:8086/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 133 8080 ИП Гайдова', function () {
        cy.visit('http://192.168.0.133:8080/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 133 8081 ИП Кушта', function () {
        cy.visit('http://192.168.0.133:8081/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 133 8082 ИП Аскретков', function () {
        cy.visit('http://192.168.0.133:8082/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 133 8083 ИП Богомазова', function () {
        cy.visit('http://192.168.0.133:8083/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
    it('Автотест на проверку УТМ 133 8084 ИП Французова', function () {
        cy.visit('http://192.168.0.133:8084/app/services/rsa'); //открыть УТМ 
        cy.wait (5000) //подождать 5 секунд
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click();
        cy.get('.ci-step > .mat-raised-button').click(); // кликни на кнопку продолжить
        cy.wait (10000) //подождать 10 секунд
        cy.get('.mat-card'); //найти адрес
    })
})

