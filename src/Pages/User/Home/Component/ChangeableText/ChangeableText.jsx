import React from 'react'
import './ChangeableText.scss'

export default function ChangeableText() {
    return (
        <div className='ChangeableText'>
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text">
                        WELCOME
                    </p>

                    <ul class="content__container__list">
                        <li class="content__container__list__item">#Spartan !</li>
                        <li class="content__container__list__item">#Everyone !</li>
                        <li class="content__container__list__item"> !</li>
                        <li class="content__container__list__item">everybody !</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}