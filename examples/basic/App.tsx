import React from "react"
import { Button, Text, Card, Container, Grid } from "hie-ui"

export default function App() {
  return (
    <Container>
      <Grid columns={1} gap={8}>
        <Card padding="medium" className="space-y-4">
          <Text variant="h1">Welcome to Hie UI</Text>
          <Text variant="body">
            A minimalist React component library with modern design principles
          </Text>
          <div className="flex gap-4">
            <Button variant="solid">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </Card>

        <Card padding="medium" className="space-y-4">
          <Text variant="h2">Component Examples</Text>
          <Grid columns={2} gap={4}>
            <Card padding="small">
              <Text variant="h3">Typography</Text>
              <Text variant="body">Clean and readable text components</Text>
            </Card>
            <Card padding="small">
              <Text variant="h3">Buttons</Text>
              <Text variant="body">Flexible and customizable buttons</Text>
            </Card>
          </Grid>
        </Card>
      </Grid>
    </Container>
  )
} 