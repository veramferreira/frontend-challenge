import { Container, Row, Col } from "react-grid-system";

type sidebarProps = {
  rows: number;
  columns: number;
};

export default function GridArea({ rows, columns }: sidebarProps) {
  const makeGridElements = () => {
    const gridElements = [];

    const totalGridArea = rows * columns;

    for (let i = 1; i <= totalGridArea; i++) {
      const elementName = `element_${i}`;
      gridElements.push(
        <Col key={elementName} className="grid--element">
          <div className="viewport--element">
            <p>{elementName}</p>
          </div>
        </Col>
      );
    }
    return gridElements;
  };

  return (
    <section className="grid--container">
      <Container>
        <Row>{makeGridElements()}</Row>
      </Container>
    </section>
  );
}
