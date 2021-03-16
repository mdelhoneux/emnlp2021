import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import PageHelmet from "../components/PageHelmet";
import "../styles/default-page.scss";
import StandardPageTemplate from "../components/StandardPageTemplate";

const DefaultPageSecNavbar = ({ data, location }) => {
  const { markdownRemark: page, footerData, navbarData, secondaryNavData, site } = data;

    return (
        <Layout {...{footerData, navbarData, secondaryNavData, site, location}}>
        <PageHelmet page={page}/>
        <StandardPageTemplate page={{...page}}>
        <HTMLContent className="default-content" content={page.html}/>
        </StandardPageTemplate>
        </Layout>
    );
};

DefaultPageSecNavbar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPageSecNavbar;

export const defaultPageSecNavbarQuery = graphql`
  query DefaultPageSecNavbar($id: String!) {
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
    ...LayoutFragment
    secondaryNavData: allMarkdownRemark(filter: { frontmatter: { forSection: { eq: "program" } } }) {
    ...NavbarFieldsFragment
  }
  }
`;
