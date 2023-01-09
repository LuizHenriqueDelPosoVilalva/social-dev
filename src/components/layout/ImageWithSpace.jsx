import styled from "styled-components"

const WIDTH_BREAK= '600px'
const StyleFlex= styled.div `
  display: flex;
`
const StyleImage= styled.div `
  background-image: url('${props => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`

const StyleContainer= styled.div `
  background-color: white;
  padding: 30px;

  @media (min-width: ${WIDTH_BREAK}) {
    width: 100%;
    min-width: calc(${WIDTH_BREAK}- 60);
  }

  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }
`

function ImageWithSpace ({children, image}) {
  return (
    <div>
      <StyleFlex>
        <StyleImage image= {image} />
        <StyleContainer>
          {children}
        </StyleContainer>
      </StyleFlex>
    </div>
  )
}

ImageWithSpace.defaultProps= {
  image: '/coffee-background.jpg'
}

export default ImageWithSpace