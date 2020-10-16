async function login() {

    const email = $('#username').val()
    const password = $('#password').val()

    const response = await axios.post('/account/login', {
        email,
        password,
    })

    if (response.data.error) {

        alertify.set('notifier', 'position', 'top-right');
        alertify.error(response.data.errormessage);

    } else {

        alertify.set('notifier', 'position', 'top-right');
        alertify.success(response.data.message);

        await sleep(550)

        window.location.href = '/'
    }

}