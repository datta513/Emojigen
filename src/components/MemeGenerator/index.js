import {Component} from 'react'
import {
  Containerstyle,
  Container,
  Header,
  Button,
  Heading,
  Containerimg,
  La,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

export default class MemeGenerator extends Component {
  state = {
    imageurl: '',
    size: fontSizesOptionsList[0].optionId,
    toptext: '',
    bottompost: '',
    click: false,
  }

  current = event => {
    this.setState({size: event.target.value})
  }

  imagechange = event => {
    const {imageurl, size, toptext, bottompost, click} = this.state
    const k = event.target.value.trim(' ')
    this.setState({imageurl: k})
  }

  triger = event => {
    event.preventDefault()
    const {imageurl, size, toptext, bottompost, click} = this.state
    if (
      imageurl.length !== 0 &&
      size !== 0 &&
      toptext.length !== 0 &&
      bottompost.length !== 0
    ) {
      this.setState({click: true})
    }
  }

  bitch = event => {
    const {imageurl, size, toptext, bottompost, click} = this.state
    const k = event.target.value.trim(' ')
    this.setState({bottompost: k})
  }

  toptch = event => {
    const k = event.target.value.trim(' ')
    this.setState(() => ({
      toptext: k,
    }))
  }

  render() {
    const {imageurl, size, toptext, bottompost, click} = this.state
    console.log(imageurl, size, toptext, bottompost, click)
    return (
      <Container s="main">
        <form onSubmit={this.triger}>
          <Container>
            <Heading>meme generator</Heading>

            <La htmlFor="Imageurl">Image URL</La>
            <Containerstyle
              type="text"
              placeholder="Image url"
              id="Imageurl"
              onChange={this.imagechange}
              value={imageurl}
            />
            <La htmlFor="Toptext">Top Text</La>
            <Containerstyle
              type="text"
              placeholder="Enter Top Text"
              id="Toptext"
              onChange={this.toptch}
              value={toptext}
            />
            <La htmlFor="Bottom Text">Bottom Text</La>
            <Containerstyle
              type="text"
              placeholder="Enter Bottom Text"
              id="Bottom Text"
              onChange={this.bitch}
              value={bottompost}
            />
            <La htmlFor="Size">Font Size</La>
            <Containerstyle as="select" id="Size" onChange={this.current}>
              {fontSizesOptionsList.map(each => (
                <option
                  id={each.optionId}
                  key={each.optionId}
                  value={each.optionId}
                >
                  {each.displayText}
                </option>
              ))}
            </Containerstyle>
            <Button type="submit">Generate</Button>
          </Container>
        </form>
        {click && (
          <Containerimg image={imageurl} data-testid="meme">
            {console.log(size)}
            <Header he={size}>{toptext}</Header>
            <Header he={size}>{bottompost}</Header>
          </Containerimg>
        )}
      </Container>
    )
  }
}
