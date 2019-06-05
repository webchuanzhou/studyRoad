[{$size['time']}]
访问
host 
C:\Windows\System32\drivers\etc
[{$size['time']}]
{:input('coin')} 跳转拿参rul地址

<?=p($CoinType);die;?> 打印

{:p($MarketList)}

  {volist name="CoinType" id="vo"}
{/volist}


存在  condition=" isset($userData)"
__(‘Operate’)

{$vo.id} 输出值

 |Num变为整数
|strtoupper=###  大写
{$vo.createtime|addtime=###}
{$vo.id|date='Y-m-d H:i:s',###}
|date='Y-m',###
|date='d',###
|date='H:s',###
|addtime=###
|json_encode=### 转json
|round=###,8

$comment["status"]["2"][$vol['status']]  状态类型 翻译


no know

offset="0" length='10'

{$vo["count"]["sum"]|default='0'}

       地址栏   跳转+参数
{:url('trade/index',['market'=>'btc_ltc'])}
{:url('trade/klineData')}
// 引入 js
<script src="__CDN__/assets/js/jquery.peity.js" charset="utf-8"></script>

{include file="Public/header" /}
{include file="Public/left" /}
{include file="Public/footer" /}

变量能直接拿数据库的图片文字

      条件                    等于	
{if condition="$data['moble'] neq ''"}
// _this.marketConfig = {$MarketList[input('market')]|json_encode=###};
                    // console.log(_this.marketConfig,"999999")
                    // callback && callback(_this.marketConfig);
{if $domainChangeList}
                    {volist name="domainChangeList" id="vol"}
                      <div class="table body">
                       <div class="cell pl20">{$vol}</div>
                       <div class="cell "></div>
                       <div class="cell "></div>
                       <div class="cell "></div>
                      </div>
                    {/volist}
                    <div style="text-align:center;">
                      {$page}
                    </div>
                  {else /}
                    <div class="table no-data">{:__('No record')}</div>
                  {/if}

{cms:pagelist id="item"}
//对象的打印方式
            <?=p($item->title);die;?>
            {/cms:pagelist}

{include file="header" /}
show_news

{$item.url}
{:url('admin/cms/channel')}


cms内容管理
前台显示路由规则
/c/DIY名字 列表
/a/DIY名字 详情页


${data[i]['money']}


<ul class="slides topclassslide">
            {volist name="index_notice" id="vo"}
                <li><a href="{:url('/a/'.$vo.diyname)}">{$vo.title}</a></li>   
            {/volist}
          <!-- <li><a href="{:url('article/notice')}">Present your beautiful app with GRAPE</a></li>
          <li><a href="{:url('article/notice')}">Not only app landing you can use GRAPE as business template</a></li>
          <li><a href="{:url('article/notice')}">You can find hundreds but ultimately you love us</a></li> -->
        </ul>


控制器
<?php

namespace app\index\controller;

use app\common\controller\Frontend;

class Fiatdeal extends Frontend
{
    protected $layout = '';

    public function _initialize()
    {
        parent::_initialize();

    }
    public function index(){
        return $this->view->fetch();
    }

}


{case editor}
                                                <textarea name="row['{$item.name}']"  class="form-control editor" data-rule="{$item.rule}"  rows="5"  data-tip="{$item.tip}" {$item.extend} >{$item.value} 
                                                </textarea>
                                                {/case}