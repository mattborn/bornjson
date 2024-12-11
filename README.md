# Born.json

This is the opposite of nothing AKA something.

The “interior” or detail pages.

Start with the structure.

Work backwards from the structure.

## The Power of One

Invoke: the power of ONE.

ONE file per idea with ONE array containing ONE object.

Will that work?

Or perhaps ONE object per distinctive output?

## Start at the end!

They tend to ask:

What is the object of the game?

Perhaps the only thing we _shouldn’t_ objectify is women.

## Sort command

Oh how I love deterministic workflows.

```
jq 'sort_by(.project) | map(. + {not: (.not | to_entries | sort_by(.key) | from_entries)})' alpha.json > alpha.sorted.json
```
