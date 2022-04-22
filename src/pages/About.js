import React from 'react';
import '../pages/About.css';
import Header from '../components/Header';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Footer from '../components/Footer';
import Parametros from '../images/parametros.png';
import Duracao from '../images/duracao.png';



const About = () => {
    return (
        <div className='about_container'>
            <Header />
            <div className='container_geral'>
                <div className='container_indice'>
                    <ol>
                        <li><AnchorLink href='#sobre'>Sobre a plataforma</AnchorLink></li>
                        <li><AnchorLink href='#prova'>A prova(JLPT)</AnchorLink></li>
                        <li><AnchorLink href='#objetivo'>Objetivo</AnchorLink></li>
                        <li><AnchorLink href='#fontes'>Fontes</AnchorLink></li>
                    </ol>

                </div>
                <div className='container_texto'>
                    <div id='sobre'>
                        <h1>Sobre a plataforma</h1>
                        <p>A plataforma Appanese foi criada com o intuito de unir estudantes de japonês pelo Brasil, oferecendo um espaço para memorização de palavras e Kanjis
                            desenvolvido em formato gamificado para gerar competitividade entre os usuários, consequentemente ajudando em seu aprendizado. Os jogos de memorização são
                            divididos de acordo com os níveis da prova de proficiência em japonês ou JLPT(Japanese Language Proficiency Test), para se adaptar as necessidades dos alunos
                            que irão prestar a prova.
                        </p>
                    </div>
                    <div id="prova">
                        <h1>A prova(JPLT)</h1>
                        <p>Na seção anterior, falou-se sobre o JLPT(Japanese Language Proficiency Test), que é uma prova de proficiência em japônes, e aplicada pelo próprio governo japonês
                            de forma global.<br />
                            Explicando de forma mais aprofundada, a prova é distribuída em 5 níveis, sendo eles N5, N4, N3, N2 e N1, sendo N1 o nível mais fluente e N5 o nível mais básico.
                            A prova se divide em 3 partes, sendo a primeira parte destinada a vocabulário e gramática, a segunda parte sendo mais focada a leitura e interpretação, e a terceira
                            focando em compreensão auditiva.<br />
                            Cada prova também tem sua nota de corte necessária para aprovação no exame, onde se alcançada, será recebido no endereço de cadastro um certificado de proficiência no nome do candidato.
                        </p>
                        <img src={Parametros} alt="Parâmetros para aprovação" className='imagem' />
                        <img src={Duracao} alt="Duração da prova" className='imagem' />
                    </div>
                    <div id="objetivo">
                        <h1>Objetivo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis nunc a nulla ullamcorper aliquam. Cras lobortis finibus dictum. Donec consectetur egestas neque, id sagittis nibh tincidunt eget. Nulla vitae risus in mauris sollicitudin iaculis. Suspendisse lacinia at odio non mollis. Mauris in fermentum diam. Praesent consequat mi sapien, ac venenatis odio rutrum sit amet. Vivamus laoreet tortor ut purus bibendum fringilla. Quisque a nisl sed sapien vestibulum elementum. Sed sit amet lectus interdum, maximus arcu sed, gravida dolor.<br />

                            Fusce in porttitor lorem. In id nulla eleifend, placerat eros vitae, commodo elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nec mi tellus. Duis quis enim lorem. In semper nulla commodo, viverra tellus at, ornare risus. Maecenas sit amet neque eget dolor pulvinar tempor.<br />

                            In venenatis lectus eu est ultrices accumsan. Nam ut rutrum nunc. Fusce ac lorem dapibus, aliquam metus non, efficitur velit. In turpis dui, gravida quis euismod et, vestibulum non lectus. Suspendisse sit amet viverra risus. Mauris vitae tristique ex. Fusce ut congue massa, sit amet posuere nulla. Duis nec eros sollicitudin, commodo massa vel, vestibulum neque. Maecenas arcu urna, molestie eleifend tempus at, congue ultricies nulla. Ut quis ante vel nulla cursus dictum eu sit amet nibh. Curabitur convallis consequat aliquet. In sit amet diam in massa ornare commodo a a dui. Quisque tincidunt nisi vulputate metus euismod dapibus.<br />

                            Vivamus ornare ex odio. Suspendisse vehicula nunc quis magna porta porttitor. Aenean ultricies justo non pretium sollicitudin. Integer in tortor vel nibh hendrerit tempor. Donec luctus metus a odio maximus posuere. Fusce id blandit mauris, sit amet volutpat odio. Etiam et ante quis turpis pellentesque hendrerit. Nulla facilisi. Phasellus vel felis vitae arcu malesuada ullamcorper in eget odio. Vivamus tempus risus et orci venenatis, a placerat lectus tincidunt. Integer sollicitudin ante quis elit pretium, at interdum mi malesuada.<br />

                            Donec tristique nibh suscipit bibendum faucibus. Sed ultrices faucibus tellus finibus cursus. Vivamus metus ex, aliquam mattis tempor in, lacinia ac magna. Etiam nisi dolor, lobortis et nulla nec, condimentum aliquam nunc. Pellentesque at velit rhoncus, varius mi vel, pulvinar elit. In hac habitasse platea dictumst. Sed iaculis tellus nulla, eget congue nibh iaculis eu. Integer dapibus, lacus nec cursus volutpat, nisl leo commodo erat, id condimentum nulla turpis eu arcu. Suspendisse lobortis sem faucibus risus hendrerit, ut rutrum ante posuere. Donec ac sodales mi. Nam id luctus libero. Aenean porttitor lectus a eleifend euismod.<br />
                        </p>

                    </div>
                    <div id="fontes">
                        <h1>Fontes</h1>
                        <p>Os kanjis e vocabulários presentes em nossa plataforma de acordo com os respectivos níveis de proficiência, foram retirados do dicionário online
                            "Tangorin", presentes em <a href="https://www.tangorin.com" target="_blank" rel="noreferrer">www.tangorin.com</a>, e são utilizados aqui somente para fins de estudo,
                            sem nenhum fim lucrativo.

                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}




export default About;


