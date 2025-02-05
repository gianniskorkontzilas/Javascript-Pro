let noteId = 0
const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 
                    'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου',
                    'Νοεμβρίου', 'Δεκεμβρίου']


                    $(document).ready(function() {
                        setInterval(printGRDate, 1000)

                        $('#addNoteBtn').on('click', function() {
                            insertNote($('#inputNote').val().trim())
                            reset()
                        })
                    
                        $('#inputNote').on('keyup', function(e) {
                            if (e.key === 'Enter') {
                                insertNote($(this).val().trim())
                                reset()
                            }
                        })
                    
                    
                    function printGRDate() {
                        const currentDate = new Date()
                        const day = currentDate.getDay()
                        const date = currentDate.getDate()
                        const month = currentDate.getMonth()
                        const year = currentDate.getFullYear()
                        const hours = currentDate.getHours()
                        const minutes = currentDate.getMinutes()
                        const seconds = currentDate.getSeconds()
                    
                        let dayStr = daysGR[day]
                        let monthStr = monthsGR[month]
                        let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
                        let timeStr = `${(hours < 10) ? '0' : ''}${hours}:
                                        ${(minutes < 10) ? '0' : ''}${minutes}:
                                        ${(seconds < 10) ? '0' : ''}${seconds}`
                    
                        $('#dateTxt').html(dateStr + "<br>" + timeStr)
                    }
                    
                    function insertNote(note) {
                        if (!note) return
                    
                        noteId++
                        let clone = $('.note.hidden').clone()
                        clone.removeClass('hidden')
                    
                        clone.find('#noteCheck').on('click', function() {
                            strikeThrough($(this).siblings('.note-text'))
                        })
                    
                        clone.find('#noteDelBtn').on('click', function() {
                            delete($(this).closest('.note').remove())
                        })
                    
                        let cloneNote = clone.find('.note-info')
                        cloneNote.children().eq(0).prop('id', 'noteCheck' + noteId)
                        cloneNote.children().eq(1).prop('htmlFor', 'noteCheck' + noteId)
                    
                    
                        clone.find('.note-text').html(note)
                        $('.notes-wrapper').append(clone)
                    }
                    
                    function strikeThrough(element) {
                        element.toggle('line-through')
                    }
                    
                    function deleteNote(note) {
                        note.remove()
                    }
                    
                    function reset() {
                        $('#inputNote').val('')
                    }

                    
                })
                    