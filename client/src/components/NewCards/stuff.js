<Card key={index + "bug"} className={classes.card}>
<CardHeader
    avatar={
      <i class="material-icons">
      bug_report
      </i>
        }
            title={bug.title}
            subheader="September 14, 2016"
/>

<CardActions className={classes.actions} disableActionSpacing>
{/* <Chip label={this.props.bug.languages} className={classes.chip} variant="outlined" /> */}
<IconButton aria-label="Add to favorites">
<Edit bug = {bug}/>
<FavoriteIcon />
</IconButton>
<IconButton aria-label="Share" href = {bug.link}>
<ShareIcon />
</IconButton>
<IconButton
className={classnames(classes.expand, {
  [classes.expandOpen]: this.state.expanded,
})}
onClick={this.handleExpandClick}
aria-expanded={this.state.expanded}
aria-label="Show more"
>
<ExpandMoreIcon/>
</IconButton>
</CardActions>
<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph>Description</Typography>
<Typography paragraph>
  {bug.description}
</Typography>
</CardContent>
</Collapse>
</Card>