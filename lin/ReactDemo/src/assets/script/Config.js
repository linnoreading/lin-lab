//基础配置
const Config = {
    //默认tanent，为了保证老代码可用，此处保留，以后建议使用子对象
    tanentName: 'M365x012679.onmicrosoft.com',
    aad: '769a3784-ffac-401b-a723-42151c485099',
    client_name: 'CochatApp',
    client_id: '77e0d220-7944-4afb-b383-f73784659bc4',
    client_secret: '6mdQ_Mdm@Qj1q.7uKan@SWDc5DZuqK0w',
    userId: '1cf2b73f-0a73-417a-9c66-6fddde294dad',
    redirect_uri: 'http://localhost:3000/callback',

    tanent_M365x012679: {
        tanentName: 'M365x012679.onmicrosoft.com',
        aad: '769a3784-ffac-401b-a723-42151c485099',
        client_name: 'CochatApp',
        client_id: '77e0d220-7944-4afb-b383-f73784659bc4',
        client_secret: '6mdQ_Mdm@Qj1q.7uKan@SWDc5DZuqK0w',
        userId: '1cf2b73f-0a73-417a-9c66-6fddde294dad',
        userEmail: '',
        redirect_uri: 'http://localhost:3000/callback'
    },
    //test tanent
    tanent_M365x012679_test20200413: {
        tanentName: 'M365x012679.onmicrosoft.com',
        aad: '769a3784-ffac-401b-a723-42151c485099',
        client_name: 'test20200413',
        client_id: 'd25bf885-564e-46c0-b6de-f8d96627dae7',
        client_secret: 'N/3C-p62F2.d.]hh//Suz.Av=Lt?:04s',
        userId: '1cf2b73f-0a73-417a-9c66-6fddde294dad',
        userEmail: '',
        redirect_uri: 'https://www.baidu.com'
    }
}

export default Config;