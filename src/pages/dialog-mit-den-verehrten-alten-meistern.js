import React from 'react'
import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxCard'

import image from '../assets/images/Dialog mit den verehrten alten Meistern.png'

const alt = 'Dialog mit den verehrten alten Meistern'
const text = (
    <>
        <p>
            Leo Leonhard hat immer wieder betont, wie wichtig ihm der „Dialog
            mit verehrten alten Meistern“ ist. Das Thema durchzieht sein
            gesamtes Werk. Im Bereich der Buchillustration etwa schafft er den
            „Faustzyklus“ und verknüpft den literarischen Klassiker mit der
            Gegenwart. Auch zahlreiche Buchillustrationen zu „Woyzeck“,
            weiterhin Arbeiten zu Ezra Pounds Gedichtsammlung „Cantos“, andere
            zu Wieland oder Grabbe künden davon.
        </p>{' '}
        <p>
            So ist es auch bei seinen vielfältigen Hommagen an Künstler, die als
            Ölgemälde, aber auch als Zeichnungen und Radierungen entstanden
            sind. Leonhard erweist vielen großen Vertretern der Kunstgeschichte
            seine Reverenz – er ist ein Künstler, der Kunst über Kunst machte:
            ein Kenner der Kunstgeschichte, der Hommagen etwa an Joseph Beuys
            anfertigte – wie jenes Gemälde, in dem Beuys einen Hasen beobachtet.
            1961, als Leonhard an die Düsseldorfer Akademie kam, wurde Beuys
            gerade auf den Lehrstuhl für monumentale Bildhauerei berufen.
        </p>{' '}
        <p>
            Aber auch Hieronymus Boschs Triptychon „Garten der Lüste“, Giotto
            oder die italienische Kunst der Renaissance und der Barockzeit
            inspirierten Leonhard zu solchen Hommagen – etwa an Piero della
            Francesca („Roll over Piero“) oder Caravaggio, dessen „Berufung des
            Hl. Matthäus“ er mit einem seiner „Pflastermaler“ huldigte.
        </p>{' '}
        <p>
            Leo Leonhard führte überaus humorvolle Dialoge mit den „alten
            Meistern“: ein virtuoser Eklektiker. Das kunsthistorische Zitat ist
            wichtig im Werk von Leonhard, den wir als Künstler wahrzunehmen
            haben, der eng mit der Idee des „Pastiche“ verbunden ist, die in der
            Postmoderne, vor allem in der Rezeption von Filmen, wiederentdeckt
            wurde. In der Postmoderne galt die Idee, dass der Künstler nichts
            mehr Neues, nichts Echtes zu schaffen vermag: Alles sei die Kopie
            einer Kopie einer Kopie.
        </p>{' '}
        <p>
            Leo Leonhard war einer jener Künstler, der sich Gedanken machte:
            über die Rolle des Kunstwerks, über die Rolle des Rezipienten, über
            die Rolle des Künstlers. Roland Held hat ihn in seinem Nachruf als
            „Pictor doctus“ bezeichnet, als Maler mit Bildung. Immer wieder
            imitiert seine Kunst andere Kunst – und ist sofern ein offenes,
            intertextuelles Werk. Dabei ist, das ist wichtig, diese Imitation
            zumeist von Hochachtung geprägt. Das Motiv des Künstlers, des
            Pflastermalers, der Kunst übermalt, variiert er immer wieder. Die
            Aussage ist deutlich: Die Gegenwart vergisst das Vergangene zu
            schnell.
        </p>
    </>
)

export default function DialogVerehrtenAltenMeistern() {
    return (
        <Layout>
            <section className="standard-layout-width">
                <Template src={image} text={text} alt={alt} />
            </section>
        </Layout>
    )
}
