import React from "react"

function Wih() {
    return(
        <div className="wih-bg">
            <div className="container">
                <div className="row">
                    <div className="stubhub-info col-xs-6 col-sm-8 col-md-8">
                        <img className="img-responsive" src="images/stubhub.png" />
                        <p>StubHub is the world’s largest ticket marketplace with tickets available for over 10 million live sports, music and theatre events in more than 40 countries. We enable experience-seekers to buy and sell tickets whenever and wherever they are through our desktop and mobile experiences.</p>
                        <p>Owned by eBay, StubHub reinvented the ticket marketplace in 2000 and continues to lead it through innovation. StubHub’s industry firsts include:the introduction of the ticketing application, interactive seat mapping, 360 degree virtual views of seating, innovative price recommendationtechnology and an algorithm that determines the best value on tickets. Most recently, StubHub expanded into more than 40 additional markets withthe acquisition of Ticketbis in May 2016.</p>
                    </div>
                    <div className="stubhub-bonus col-xs-6 col-sm-4 col-md-4">
                        <div className="stubhub-wrapper">
                            <i className="fas fa-ticket-alt"></i>
                            <p>Fan ProtectTM guarantee.  We back every order so you can buy and sell tickets with 100% confidence.</p>
                            <i className="fas fa-microphone-alt"></i>
                            <p>Access to millions of events, worldwide.  More events, more selection.  StubHub is the world’s largest ticket marketplace.</p>
                            <i className="fas fa-street-view"></i>
                            <p>Technology that helps you find the right seats.  Find the best deals available and see your seat virtually with 360-degree views.</p>
                        </div>
                        <div className="stubhub-button">
                            <a href="https://www.stubhub.com/" target="_blank">STUBHUB <i className="far fa-arrow-alt-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wih