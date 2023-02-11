describe("App Hierarchy", () => {
  it("should maintain the same HTML element heiarchy", () => {
    cy.get(".events").should("exist");
    cy.get("body").within(() => {
      cy.get("header").should("exist");
      cy.get("main")
        .should("exist")
        .within(() => {
          cy.get("form").should("exist");
          cy.get("ul")
            .should("exist")
            .within(() => {
              cy.get("li")
                .should("exist")
                .within(() => {
                  cy.get("h5").should("exist");
                  cy.get("img").should("exist");
                  cy.get("button").should("exist");
                  cy.contains("Show Attendees")
                    .click()
                    .then(() => {
                      cy.get(".attendees").within(() => {
                        cy.get(".attendee")
                          .first()
                          .should("exist")
                          .within(() => {
                            cy.get("p").should("have.length", 3);
                            cy.get("button").should("have.text", "Attending:");
                          });
                      });
                    });
                  cy.wait(100);
                  cy.get("button").first().click();
                });
            });
        });
      cy.get("footer").should("exist");
    });
  });
});

describe("Can create a new event", () => {
  it("can fill out and submit a form", () => {
    cy.get("#name").type("Lodge 49");
    cy.get("#organizer").type("Dud");
    cy.get("#eventType").select("Watch Party");
    cy.get("form").submit();
  });
  it("on submit create a new event", () => {
    cy.contains("Lodge 49");
    cy.contains("Dud");
  });
});

describe("can show/hide attendees per event", () => {
  it("can show/hide attendees", () => {
    cy.get(".events button")
      .eq(3)
      .click()
      .then(() => {
        cy.get(".attendees").within(() => {
          cy.get(".attendee").should("have.length", 5);
        });
      });
  });
  it("Only show/hides the attendees of one event!!!!!!", () => {
    cy.get(".events button")
      .eq(4)
      .click()
      .then(() => {
        cy.get(".event")
          .eq(2)
          .within(() => {
            cy.get(".attendees").should("not.exist");
          });
      });
  });
});
