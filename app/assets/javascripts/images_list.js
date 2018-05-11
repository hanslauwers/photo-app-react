function updateImagesOrder (newList)
{
    var newList = [{ id: '2' }, { id: '1' }];
    newList = JSON.stringify({ 'list': newList });
    $.ajax({
        url: '/images/update_order',
        type: 'put',
        dataType: 'json',
        data: newList
  });
}