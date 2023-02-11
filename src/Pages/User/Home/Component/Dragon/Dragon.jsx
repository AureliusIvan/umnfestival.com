import "./Dragon.scss"

export default function Dragon () {
    return (
        <div id="dragonwrap">
            <div id='dragon'>
                <div id='front'>
                    <div id='head'>
                        <div id='eye'></div>
                    </div>
                    <div id='neck'></div>
                </div>
                <div id='body'>
                    <div id='armL'>
                        <div class='hand'></div>
                    </div>
                    <div id='armR'>
                        <div class='hand'></div>
                    </div>
                    <div id='wingL'></div>
                    <div id='wingR'></div>
                    <div id='legL'>
                        <div class='foot'></div>
                    </div>
                    <div id='legR'>
                        <div class='foot'></div>
                    </div>
                </div>
                <div id='tail'>
                    <div id='inner'>
                        <div id='outer'>
                            <div id='tip'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}