import React from 'react';
import { Card } from '@material-ui/core'
import { CardHeader } from '@material-ui/core';

class BlogPage extends React.Component {
  render() {
    return (
      <section id="two" className="main style2">
        <h1>Hello world from the blog page</h1>
        <Card>
          <CardHeader title='this is a card'></CardHeader>
        </Card>
        <Card>
          <CardHeader>Second card</CardHeader>
        </Card>
      </section>
    )
  }
}

export default BlogPage;