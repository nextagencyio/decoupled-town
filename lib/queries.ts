// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredServicesTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Departments
export const GET_DEPARTMENTS = gql`
  query GetDepartments($first: Int = 20) {
    nodeDepartments(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeDepartment {
          body {
            processed
          }
          phone
          email
          location
          hours
          departmentCategory {
            ... on TermInterface {
              id
              name
            }
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_DEPARTMENT_BY_PATH = gql`
  query GetDepartmentByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeDepartment {
            id
            title
            path
            body {
              processed
            }
            phone
            email
            location
            hours
            departmentCategory {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Officials
export const GET_OFFICIALS = gql`
  query GetOfficials($first: Int = 50) {
    nodeOfficials(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeOfficial {
          body {
            processed
          }
          position
          department {
            ... on TermInterface {
              id
              name
            }
          }
          email
          phone
          office
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_OFFICIAL_BY_PATH = gql`
  query GetOfficialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            office
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Services
export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          body {
            processed
          }
          department {
            ... on TermInterface {
              id
              name
            }
          }
          onlineUrl
          eligibility
          fee
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE_BY_PATH = gql`
  query GetServiceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            department {
              ... on TermInterface {
                id
                name
              }
            }
            onlineUrl
            eligibility
            fee
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Meetings
export const GET_MEETINGS = gql`
  query GetMeetings($first: Int = 20) {
    nodeMeetings(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeMeeting {
          body {
            processed
          }
          meetingDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          meetingType {
            ... on TermInterface {
              id
              name
            }
          }
          agendaUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_MEETING_BY_PATH = gql`
  query GetMeetingByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMeeting {
            id
            title
            path
            body {
              processed
            }
            meetingDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            meetingType {
              ... on TermInterface {
                id
                name
              }
            }
            agendaUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Alerts
export const GET_ALERTS = gql`
  query GetAlerts($first: Int = 20) {
    nodeAlerts(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeAlert {
          body {
            processed
          }
          alertLevel {
            ... on TermInterface {
              id
              name
            }
          }
          effectiveDate {
            timestamp
          }
          expirationDate {
            timestamp
          }
          affectedArea
        }
      }
    }
  }
`

export const GET_ALERT_BY_PATH = gql`
  query GetAlertByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAlert {
            id
            title
            path
            body {
              processed
            }
            alertLevel {
              ... on TermInterface {
                id
                name
              }
            }
            effectiveDate {
              timestamp
            }
            expirationDate {
              timestamp
            }
            affectedArea
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeDepartment {
            id
            title
            path
            body {
              processed
            }
            phone
            email
            location
            hours
            departmentCategory {
              ... on TermInterface {
                id
                name
              }
            }
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeOfficial {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            office
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeService {
            id
            title
            path
            body {
              processed
            }
            department {
              ... on TermInterface {
                id
                name
              }
            }
            onlineUrl
            eligibility
            fee
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeMeeting {
            id
            title
            path
            body {
              processed
            }
            meetingDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            meetingType {
              ... on TermInterface {
                id
                name
              }
            }
            agendaUrl
          }
          ... on NodeAlert {
            id
            title
            path
            body {
              processed
            }
            alertLevel {
              ... on TermInterface {
                id
                name
              }
            }
            effectiveDate {
              timestamp
            }
            expirationDate {
              timestamp
            }
            affectedArea
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredServicesTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured services for homepage (limit to 4)
export const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices {
    nodeServices(first: 4, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          department {
            ... on TermInterface {
              id
              name
            }
          }
          fee
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming meetings for homepage
export const GET_UPCOMING_MEETINGS = gql`
  query GetUpcomingMeetings {
    nodeMeetings(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeMeeting {
          meetingDate {
            timestamp
          }
          location
          meetingType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

// Active alerts for homepage
export const GET_ACTIVE_ALERTS = gql`
  query GetActiveAlerts {
    nodeAlerts(first: 5, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeAlert {
          alertLevel {
            ... on TermInterface {
              id
              name
            }
          }
          effectiveDate {
            timestamp
          }
          expirationDate {
            timestamp
          }
          affectedArea
        }
      }
    }
  }
`
