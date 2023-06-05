import React from 'react';
import IMAGES from "../../constants/images";
import {Image} from "react-bootstrap";

const AboutMePage = () => {
    return (
        <div>
            <header style={{
                display: 'flex',
                margin: 'auto auto',
                alignItems: 'center',
                gap: '20px',
                justifyContent: 'center',
                marginTop: '60px'
            }}>
                <div>
                    <Image roundedCircle style={{width: '200px'}} src={IMAGES.author}/>
                </div>
                <div>
                    <h1>Ахметов Фаннур</h1>
                    <h2>Frontend разработчик</h2>
                    <div>
                        <a href='https://t.me/stoptalkingthatshit'>
                            <Image title={'Написать в Telegram - @stoptalkingthatshit'} src={IMAGES.telegram}/>
                        </a>
                        <a href='mailto:AkhmetovFFQA@yandex.ru'>
                            <Image title={'Написать на почту'} src={IMAGES.mail}/>
                        </a>
                        <a href='https://github.com/F4nnur'>
                            <Image title={'GitHub - @F4nnur'} src={IMAGES.github}/>
                        </a>
                    </div>
                </div>
            </header>
            <div style={{display: 'block', margin: '100px 480px'}}>
                <section>
                    <h2 style={{fontSize: '25px', lineHeight: '1.5'}}>Обо мне</h2>
                    <p style={{lineHeight: '1.5', marginBottom: '8px'}}>
                        Начал свой путь в 2019 году. Изначально писал backend приложения на Python
                        с использованием Django, FastAPI. Для хранения данных использовал PostgreSQL.
                    </p>
                    <p>
                        Также есть опыт в написании telegram ботов на Python с использованием aiogram/telebot.
                    </p>
                    <p>
                        На данный момент пишу frontend приложения. При разработке использую такой стек: React,
                        redux/redux-toolkit, react-router, axios.
                    </p>
                </section>
                <section>
                    <h2 style={{fontSize: '25px', lineHeight: '1.5'}}>Работа</h2>
                    <table style={{
                        display: 'table',
                        borderCollapse: 'separate',
                        textIndent: 'initial',
                        borderSpacing: '2px',
                        borderColor: 'gray',
                        width: '100%'
                    }}>
                        <tbody style={{display: 'table-row-group', verticalAlign: 'middle', borderColor: 'inherit'}}>
                        <tr style={{display: 'table-row', verticalAlign: 'inherit', borderColor:'inherit'}}>
                            <td style={{padding: '6px', verticalAlign: 'top', lineHeight: '1.5'}}>
                                <p>Совкомбанк</p>
                            </td>
                            <td style={{whiteSpace: 'nowrap', padding: '6px', verticalAlign: 'top'}}>2022</td>
                            <td>Рзработка приложения, предоставляющего возможность отслеживания рабочего времени, аренды
                                свободных устройств. Стек: Typescript, React, react-router, redux-toolkit.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default AboutMePage;