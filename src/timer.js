import { readable } from 'svelte/store'

export const clock = function(options={}) {
  return readable(null, set => {
    // the update function sets the latest date
    const update = () => set(new Date())
    
    // force an update to initialize the store with a non-null value
    update()
		
    // setup an interval timer to update the store's value repeatedly over time
    const interval = setInterval(update, options.interval || 1000)
		
    // return unsubscribe callback:
    // it will stop the timer when the store is destroyed
    return () => {clearInterval(interval); console.log("clock unsub")};
  })
}

export function toHuman (s) {
    const seconds = Math.floor(s % 60);
    const minutes = Math.floor((s / 60) % 60);
    const hours = Math.floor((s / 3600 ) % 24);

    return [hours > 0 ? hours.toString() + ":" : '',
            minutes.toString().padStart(2, '0') + ":",
            seconds.toString().padStart(2, '0')
    ].join('');
}