import Grid from '@material-ui/core/Grid'

export default function Instructions (props) {
  return (
    <Grid container item style={{ lineHeight: '1.33em', marginTop: 8, textAlign: 'left'}} xs={12}>
      <Grid item xs={12}>
        This application lets you search the scripts from the NBC television show <a style={{ color: '##a6cee3' }} href="https://en.wikipedia.org/wiki/The_Office_(American_TV_series)">The Office</a>
        , and visualizes the results to give you insight as to which episode the quote appears, 
        who said the quote, when they said the quote, how many times they said the quote, 
        and the context of the quote.
      </Grid>
      <Grid item xs={12}>
        <ul>
          <li>Type word or phrase in the search box, and press the <b>Enter</b> key to search.</li>
          <li>There is a graph of the character(s) who said the quote, and how many lines that quote appears in the script.</li>
          <li style={{marginLeft: 0}}><b>Click</b> a character name to filter for only their lines.</li>
          <li>The seasons and episodes are plotted beneath the character chart, 
            and the episode contains the number of lines the word or phrase appears.</li>
          <li style={{marginLeft: 0}}><b>Click</b> the episode bubble to view the matching lines from that episode.</li>                 
          <li>Beneath the graphs is the list of lines that contain the quote.</li>
          <li style={{marginLeft: 0}}><b>Click</b> "more" to see the lines immediately 
            before and after the line with your search terms.</li>
        </ul>
      </Grid>
    </Grid>    
  )
}