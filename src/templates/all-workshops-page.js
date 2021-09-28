import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import PageHelmet from "../components/PageHelmet";
import StandardPageTemplate from "../components/StandardPageTemplate";
import "../styles/all-events-page.scss";

const WorkshopListing = ({ title, summary, underlineURL, authors, url, numDays, workshopNumber, kind }) => (
  <article className="event-listing">
    <h3>{workshopNumber} : <a href={url}>{title}</a></h3>
    <div className="event-organizers">{authors}</div>
    <p className="event-summary">    
    <div className="event-duration">{kind} </div> 
      {numDays > 1 ? <div className="event-duration">{numDays} days</div> : null}
      {summary}
    <div className="underline-link">
    <a href={underlineURL}>schedule</a> 
    </div>
    </p>
  </article>
);

const WorkshopsForDate = ({ date, workshops }) => (
  <section className="events-for-date">
    <h2>{date}</h2>
    <section className="workshops">
      {workshops.map(w => <WorkshopListing {...w} key={w.workshopId} />)}
    </section>
  </section>
);

const AllWorkshopsByDate = ({ datesAndWorkshops }) => (
  <section className="all-events">
    {datesAndWorkshops.map(({ date, workshops }) => <WorkshopsForDate key={date} date={date} workshops={workshops} />)}
  </section>
);


const AllWorkshopsPage = ({ data, location }) => {
  const { markdownRemark: page, footerData, navbarData, site, allWorkshopsCsv, secondaryNavData } = data;
  const { workshopsByDate } = allWorkshopsCsv
  const datesAndWorkshops = workshopsByDate.map(({workshops}) => ({ date: workshops[0].startDate, workshops }))

  return (
    <Layout {...{footerData, navbarData, secondaryNavData, site, location}}>
    <PageHelmet page={page} />
      <StandardPageTemplate page={{ ...page }}>
        <HTMLContent className="default-content" content={page.html} />
        <AllWorkshopsByDate datesAndWorkshops={datesAndWorkshops}/>
      </StandardPageTemplate>
    </Layout>
  );
};

AllWorkshopsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllWorkshopsPage;

export const allWorkshopsPageQuery = graphql`
  query WorkshopsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
      }
    }
    allWorkshopsCsv {
      workshopsByDate: group(field: startDate) {
        workshops: nodes {
          authors
          workshopNumber
          url
          title
          summary
          underlineURL
          startDate(formatString: "MMMM D, YYYY")
          numDays
          kind
        }
      }
    }
    ...LayoutFragment
    secondaryNavData: allMarkdownRemark(filter: { frontmatter: { forSection: { eq: "program" } } }) {
      ...NavbarFieldsFragment
    }
  }
`;
